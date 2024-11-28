const ReceiptsModel = require("../Models/sql/receipts");

class ReceiptsController {
  static async getAll(req, res) {
    try {
      const receipt = await ReceiptsModel.getAll()

      res.json(receipt)
    } 
    catch (e) {
      console.error('Error getting receipt/s:', e); 
      res.status(500).json({ error: 'Error al obtener recibo/s' });
    }
  }
  
  static async getReceiptFormulas(req, res) {
    try {
      const res = await ReceiptsModel.getReceiptFormulas()
      res.json(res)
    } 
    catch (e) {
      console.error('Error getting receipt/s:', e); 
      res.status(500).json({ error: 'Error al obtener recibo/s' });
    }
  }

  static async createReceipt(req, res) {
    try {
      const inputData = req.body  

      const existingData = await ReceiptsModel.createReceipt({ input: inputData });
      if (!existingData) {
        return res.status(409).json({ error: 'El recibo ya se encuentra en el sistema!' });
      }

      return res.status(201).json({ message: 'Recibo creado correctamente' });
    } 
    catch (e) {
      console.error('Error creating receipt:', e); 
      res.status(500).json({ error: 'Error al crear recibo' });
    }
  }
}

module.exports = ReceiptsController;
