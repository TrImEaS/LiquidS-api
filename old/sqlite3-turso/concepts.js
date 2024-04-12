import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'


const libsql = createClient({
  url: "libsql://technologyline-database-trimeas.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MDg2MzI2NDksImlkIjoiY2Y0YzhiODktZDE3Yi0xMWVlLWEyYTctOGU4YjRkMDEwY2ViIn0.2SH_T4fnPJIT4V5RV8NT9s2peRX19ArtmnY4Kp4bmrMg1ZkyKFltOUUz6-RfkoD9Ams6Zh9Sbtq-pOIaltoGBQ",
})

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export class ConceptModel {

 // Get all concepts but if name param exist return only this concept
  static async getAll ({ name }) {

    if(name){
      const concepts = await prisma.concepts.findUnique({
        where: {
          name: {
            equals: name.toLowerCase(),
          }
        }
      })
    }
    
    const concepts = await prisma.concepts.findMany()
    
    return concepts;
  }

  // Get an concept by id
  static async getById (id) {
    const concept = await prisma.concepts.findUnique({
      where: {
        id: id
      },
    })
    return concept
  }

  // Create an employee
  static async create ({ input }) {
    const newConcept = await prisma.concepts.create({ data: {...input} })
    return newConcept
  }

  // Edit an employee with the id
  static async update ({ id, input }) {
    const updatedConcept = await prisma.concepts.update({
      where: { id: parseInt(id) },
      data: input
    })

    return updatedConcept
  }

  static async delete ({ id }) {
    const result = await prisma.concepts.delete({
      where:{ id: id}
    })
    
    return result
  }
}