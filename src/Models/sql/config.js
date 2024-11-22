const mysql = require('mysql2');

const LIQUIDSPool = mysql.createPool({
  host: 'localhost',
  user: 'Thomas2024az',
  password: 'Dacarry-123@',
  database: 'liquids',
  connectionLimit: 10
}).promise(); 

module.exports = { LIQUIDSPool }