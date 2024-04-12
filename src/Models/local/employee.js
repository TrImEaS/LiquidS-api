const fs = require('fs')
const path = require('path')

const jsonFilePath = path.resolve(__dirname, '/employee.json')

class EmployeeModel {
  // Get all employees
  static async getAll ({ company }) {
    let employees = await this.readJsonFile()
    console.log(jsonFilePath)
    
    if (company) {
      return employees.filter( employee => employee.company.trim() === company.toLowerCase() )}
    
    return employees
  }

  // Get data by id
  static async getById(id) {
    let jsonData = await this.readJsonFile()
    return jsonData.filter(data => parseInt(data.id) === parseInt(id) )
  }

  //Get last id
  static async getNextId() {
    let jsonData = await this.readJsonFile()

    // Ordenar los datos por ID en orden descendente
    jsonData.sort((a, b) => b.id - a.id)

    // Obtener el primer elemento, que será el último ID
    const lastData = jsonData[0]

    // Si no hay datos, comenzar desde 1
    const nextId = lastData ? lastData.id + 1 : 1 

    return nextId
  }
  

  static async getAllByCompany ({ company }) {
    const employeesByCompany = 
      employees.filter( employee => employee.company && employee.company.toLowerCase() === company.toLowerCase() )
    
    return employeesByCompany
  }

  // Create an employee
  static async create ({ input }) {
    try {
      let jsonData = await this.readJsonFile()

      // Verificar si ya existe un registro con el mismo client y numberBill
      const existingData = jsonData.find(data =>
        data.docket === parseInt(input.docket) &&
        data.company === input.company &&
        data.dni === input.dni
      )

      if (existingData) {
        return false
      }

      // Agregar el nuevo dato al array
      jsonData.push(input)

      // Escribir los datos actualizados en el archivo JSON
      await this.writeJsonFile(jsonData)

      console.log('New employee data created')
      return input
    } 
    catch (error) {
      console.error('Error creating employee:', error)
      throw error
    }
  }

  // Edit an employee with the docket
  static async update ({ id, input }) {
    try {
      let jsonData = await this.readJsonFile()

      const index = jsonData.findIndex(data => parseInt(data.id) === parseInt(id))

      if (index === -1) {
        return 'Error: Id indicado no encontrado'
      }

      // Actualizar los datos encontrados en el índice correspondiente
      jsonData[index] = { 
        ...jsonData[index], 
        ...input 
      }

      // Escribir los datos actualizados en el archivo JSON
      await this.writeJsonFile(jsonData)

      return jsonData[index]
    } 
    catch (error) {
      console.error('Error updating employee:', error)
      throw error
    }
  }

  // Delete an employee with the docket
  static async delete ({ docket }) {
    const employeeIndex = employees.findIndex(employee => employee.docket === parseInt(docket))
    if(employeeIndex === -1) return false

    employees.splice(employeeIndex, 1)
    return true
  }

  //--> --- --- --- --- --- --- --- --- <--//
  //Function for readJsonFile
  static async readJsonFile() {
    try {
      const rawData = await fs.promises.readFile(jsonFilePath)
      return JSON.parse(rawData)
    } catch (error) {
      console.error('Error reading JSON file:', error)
      return []
    }
  }
  
  //Function for writeJsonFile
  static async writeJsonFile(data) {
    try {
      await fs.promises.writeFile(jsonFilePath, JSON.stringify(data, null, 2))
    } catch (error) {
      console.error('Error writing JSON file:', error)
      throw error
    }
  }
}

module.exports = EmployeeModel;
