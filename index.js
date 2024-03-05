import express from 'express'
import cors from 'cors'
import { employeeRouter } from './src/Routes/employees.js'
import { conceptRouter } from './src/Routes/concepts.js'

const PORT = process.env.PORT ?? 8080

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

