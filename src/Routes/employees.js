const { Router } = require('express')
const EmployeesController = require('../Controllers/employees.js')

const employeesRouter = Router()
employeesRouter.get('/', EmployeesController.getAll)
employeesRouter.get('/sectors', EmployeesController.getSectors)

module.exports = employeesRouter