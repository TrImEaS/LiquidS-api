import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'


const libsql = createClient({
  url: "libsql://technologyline-database-trimeas.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MDg2MzI2NDksImlkIjoiY2Y0YzhiODktZDE3Yi0xMWVlLWEyYTctOGU4YjRkMDEwY2ViIn0.2SH_T4fnPJIT4V5RV8NT9s2peRX19ArtmnY4Kp4bmrMg1ZkyKFltOUUz6-RfkoD9Ams6Zh9Sbtq-pOIaltoGBQ",
})

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export class EmployeeModel {

 // Get all employees but if company param exist return only employees from this company
  static async getAll ({ company }) {

    if(company){
      const employees = await prisma.employees.findMany({
        where: {
          company: {
            equals: company.toLowerCase(),
          },
          orderBy: {
            title: 'asc',
          },
        },
      })
    }
    
    const employees = await prisma.employees.findMany()
    
    return employees;
  }

  // Get an employee with the id
  static async getById (id) {
    const employee = await prisma.employees.findUnique({
      where: {
        id: id
      },
    })
    return employee
  }

  // Create an employee
  static async create ({ input, company, docket }) {
    const isDocketAlreadyUsed = await prisma.employees.findFirst({
      where: {
        company: { equals: company.toLowerCase() },
        docket: { equals: parseInt(docket) }
      }
    });

    if (isDocketAlreadyUsed) {
      return false;
    }

    const newEmployee = await prisma.employees.create({
      data: {
        ...input,
        company: company.toLowerCase(),
        docket: parseInt(docket)
      }
    });

    return newEmployee;
  }

  // Edit an employee with the id
  static async update ({ id, input }) {
    const updatedEmployee = await prisma.employees.update({
      where: { id: parseInt(id) },
      data: input
    })

    return updatedEmployee
  }

  // Set an employee inactive
  static async delete ({ id, input }) {
    const updateEmployeeState = await prisma.employees.update({
      where: { id: parseInt(id) },
      data: input
    })

    return updateEmployeeState;
  }
}