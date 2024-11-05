const { Router } = require ('express')
const ReceiptsController = require ('../Controllers/receipts.js')

const receiptsRouter = Router()
receiptsRouter.get('/', ReceiptsController.getAll)

module.exports = receiptsRouter
