import { Router } from 'express'
import { ConceptController } from '../Controllers/concepts.js'

export const conceptRouter = Router()

conceptRouter.get('/', ConceptController.getAll)
conceptRouter.post('/', ConceptController.create)

conceptRouter.get('/:id', ConceptController.getById)
conceptRouter.patch('/:id', ConceptController.update)
conceptRouter.delete('/:id', ConceptController.delete)
