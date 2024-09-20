const pool = require ('./config.js')

class ConceptModel {
  static async getAll ({ id, name, number }) {
    try {
      if(id) {
        const [res] = await pool.query(`SELECT * FROM concepts WHERE id = ?`, id)
        return res
      }

      if(name) {
        const [res] = await pool.query(`SELECT * FROM concepts WHERE name = ?`, name)
        return res
      }

      if(number) {
        const [res] = await pool.query(`SELECT * FROM concepts WHERE number = ?`, number)
        return res
      }

      const [res] = await pool.query('SELECT * FROM concepts');
      return res
    } 
    catch (e) {
      console.error('Error getting all concepts db:', e); 
      res.status(500).json({ error: 'Error al obtener los conceptos' });
    }
  }

  static async create ({ input }) { 
    try {
      
    } 
    catch (e) {
      console.log('Error updating concept: ', e)
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async update ({ id, input }) { 
    try {

    } 
    catch (e) {
      console.log('Error updating concept: ', e)
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  static async delete ({ id }){
    try {

    } 
    catch (e) {
      console.log('Error borrando concepto: ', e)
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = ConceptModel