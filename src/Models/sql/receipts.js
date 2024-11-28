const { LIQUIDSPool } = require('./config')

class ReceiptsModel {
  static async getAll() {
    try {
      const [res] = await LIQUIDSPool.query('SELECT * FROM receipts')
      return res
    } 
    catch (error) {
      console.error('Error fetching formulas:', error)
      throw error
    }
  }

  static async getReceiptFormulas() {
    try {
      const [res] = await LIQUIDSPool.query('SELECT * FROM receipts_formula')
      return res
    } 
    catch (error) {
      console.error('Error fetching receipt/s:', error)
      throw error
    }
  }

  static async createReceipt({ input }) {
    try {
      const query = `
      INSERT INTO receipts (
        number, 
        employee_id, 
        deposit_date, 
        remunerative_total, 
        no_remunerative_total, 
        discount_total, 
        total, 
        in_string_total, 
        payment_place_and_date, 
        payment_period
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

      const [result] = await LIQUIDSPool.query(query, [
        input.number, 
        input.employee_id, 
        input.deposit_date, 
        input.remunerative_total, 
        input.no_remunerative_total, 
        input.discount_total, 
        input.total, 
        input.in_string_total, 
        input.payment_place_and_date, 
        input.payment_period
      ])

      return result
    } 
    catch (error) {
      console.error('Error creating product:', error)
      throw error
    }

  }

  static async update({ id, input }) {
    
  }

  static async delete({ id }) {
    
  }
}

module.exports = ReceiptsModel