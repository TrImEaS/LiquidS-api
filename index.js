const express = require ('express')
const cors = require ('cors')
const { employeeRouter } = require ('./src/Routes/employees.js')
const { conceptRouter } = require ('./src/Routes/concepts.js')

const PORT = process.env.PORT || 8080

const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())


// Get an simple hi 
app.get('/', (req, res) =>{
  res.json({ message: 'Hi welcome to the API 👌😂👌😂👌😂👌. Routes: /employees, /concepts' })
})

app.use('/employees', employeeRouter)

app.use('/concepts', conceptRouter)

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))

