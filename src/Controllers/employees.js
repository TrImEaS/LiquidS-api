// import { EmployeeModel } from "../Models/local/employee.js"
import { EmployeeModel } from '../Models/sqlite3-turso/employee.js'
import { validatePartialEmployee } from '../Schemas/employees.js'
import validateEmployee from '../Schemas/employees.js'


export class EmployeeController {

  // Get all employees
  static async getAll (req, res) {
    const { company } = req.query
    const employees = await EmployeeModel.getAll({ company })
    res.json(employees)
  }

  // Get an employee by id
  static async getById (req, res) {
    let { id } = req.params
    const employee = await EmployeeModel.getById(parseInt(id))
    if (employee) return res.json(employee)
    
    res.status(404).json({ message: 'Employee not found' })
  }

  // Create an employee
  static async create (req, res) { 
    try {
      const result = validateEmployee(req.body)
      const company = req.body.company
      const docket = req.body.docket
  
      if (result.error){
        return res.status(422).json({ error: JSON.parse(result.error.message) })
      }
    
      const newEmployee = await EmployeeModel.create({ input: result.data, company, docket })
      if(newEmployee === false) 
        return res.status(422).json({ message: `El legajo ingresado ya esta en uso, ultimo legajo usado en ${company} es ${docket}`})
      res.status(201).json(newEmployee)
    } 
    catch (e) {
      console.log('Error creating employee: ', e)

      return res.status(500).json({ error: "Internal server error" });  
    }
  }

  // Edit an employee with the docket
  static async update (req, res) { 
    try {
      const result = validatePartialEmployee(req.body)
      
      if (!result.success) 
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    
      const { id } = req.params
    
      const updateEmployee = await EmployeeModel.update({ id, input: result.data })  
    
      return res.json(updateEmployee)
    } 
    catch (e) {
      console.log('Error updating employee: ', e)

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Delete an employee with the docket
  static async delete (req, res) {
    try {
      const result = validatePartialEmployee(req.body)
      
      if (!result.success) 
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    
      const { id } = req.params

      if(result.data.activo === undefined){
        return res.status(400).json({ error: 'Se requiere especificar si el empleado esta activo o no ("activo": false/true)'})
      }
    
      const updateEmployee = await EmployeeModel.update({ id, input: result.data })  
    
      return res.json(updateEmployee)
    } 
    catch (e) {
      console.log('Error deleting employee: ', e)

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}