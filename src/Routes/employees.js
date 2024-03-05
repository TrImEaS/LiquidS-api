import { Router } from 'express'
import { EmployeeController } from '../Controllers/employees.js'

export const employeeRouter = Router()

employeeRouter.get('/', EmployeeController.getAll)
employeeRouter.post('/', EmployeeController.create)

employeeRouter.get('/:id', EmployeeController.getById)
employeeRouter.patch('/:id', EmployeeController.update)
employeeRouter.delete('/:id', EmployeeController.delete)