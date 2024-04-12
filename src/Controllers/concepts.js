// const { ConceptModel } = require ('../Models/local/concepts.js')
const { validatePartialConcept } = require ('../Schemas/concepts.js')
const validateConcept = require ('../Schemas/concepts.js')

class ConceptController {
  // Get all concepts
  static async getAll (req, res) {
    const { name } = req.query
    const employees = await ConceptModel.getAll({ name })
    res.json(employees)
  }

  // Get an concept by id
  static async getById (req, res) {
    let { id } = req.params
    const concept = await ConceptModel.getById(parseInt(id))
    if (concept) return res.json(concept)
    
    res.status(404).json({ message: 'Employee not found' })
  }

  // Create an concept
  static async create (req, res) { 
    try {
      const result = validateConcept(req.body)
  
      if (result.error){
        return res.status(422).json({ error: JSON.parse(result.error.message) })
      }
    
      const newConcept = await ConceptModel.create({ input: result.data })
  
      res.status(201).json(newConcept)
    } 
    catch (e) {
      console.log('Error updating concept: ', e)

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Edit an concept by id
  static async update (req, res) { 
    try {
      const result = validatePartialConcept(req.body)
      
      if (!result.success) 
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      
      const { id } = req.params
    
      const updateConcept = await ConceptModel.update({ id, input: result.data })  
    
      return res.json(updateConcept)

    } 
    catch (e) {
      console.log('Error updating concept: ', e)

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  static async delete (req, res) {
    const { id } = req.params

    try {
      const result = await ConceptModel.delete({ id: parseInt(id) })
  
      if (!result) {
        return res.status(404).json({ error: 'Concept not found'})
      }
  
      return res.json(result)
    } 
    catch (e) {
      console.log('Error deleting concept: ', e)

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = ConceptController;
