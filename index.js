const express = require ('express')
const cors = require ('cors')
const employeeRouter = require ('./src/Routes/employees.js')
const conceptRouter = require ('./src/Routes/concepts.js')

const PORT = process.env.PORT || 8080
const allowedOrigins = ['http://localhost:5173', 'http://localhost:8080', 'https://www.technologyline.com.ar', 'https://www.line-technology.com.ar']

const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors({
  origin: allowedOrigins
}))



// Get an simple hi 
app.get('/', (req, res) =>{
  res.json({ message: 'Hi welcome to the API 👌😂👌😂👌😂👌. Routes: /employees, /concepts' })
})

app.use('/employees', employeeRouter)

app.use('/concepts', conceptRouter)

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))

