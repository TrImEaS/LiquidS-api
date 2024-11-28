const { Router } = require ('express')
const ReceiptsController = require ('../Controllers/receipts.js')

const receiptsRouter = Router()
receiptsRouter.get('/', ReceiptsController.getAll)
receiptsRouter.get('/formulas', ReceiptsController.getReceiptFormulas)

module.exports = receiptsRouter
