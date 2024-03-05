import z from 'zod'

const employeeSchema = z.object({
  docket: z.number().int().positive(),
  
  full_name: z.string({
    required_error: 'Se requiere el nombre del empleado',
    invalid_type_error: 'El nombre debe de ser de tipo string/texto'
  }),
  
  domicile: z.string({
    required_error: 'Se requiere direccion',
    invalid_type_error: 'El domicilio debe de ser de tipo string/texto'
  }).nullable().default(null),
  
  birth_date: z.string().refine((dateString) => {
    const date = new Date(dateString)
    return !isNaN(date.getTime()) && date >= new Date("1900-01-01") && date <= new Date("2024-01-01")
  },
  { message: 'Fecha de nacimiento fuera de rango (Minimo 1900-01-01)' }).nullable().default(null),
  
  nacionality: z.string({
    required_error: 'Se requiere la nacionalidad',
    invalid_type_error: 'La nacionalidad debe de ser de tipo string/texto'
  }).nullable().default(null),
  
  dni: z.string({
    required_error: 'Se requiere DNI',
  }),
  
  salary_settlement: z.enum(['Mensual', 'Semanal', 'Diario', 'Anual']),
  
  sector: z.string({
    required_error: 'Se requiere especificar el sector del empleado',
    invalid_type_error: 'El sector debe de ser de tipo string/texto'
  }).nullable().default(null),
  
  categoria: z.string({
    required_error: 'Se requiere especificar categoria',
    invalid_type_error: 'El tipo de categoria debe de ser de tipo string/texto'
  }).nullable().default(null),
  
  basic: z.number().positive().nullable().default(null),
  
  cuil: z.string({
    required_error: 'Se requiere CUIL',
  }),
  
  admision_date: z.string().refine((dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime()) && date >= new Date("1990-01-01")
  },
  { message: 'Fecha de ingreso fuera de rango (Minimo 1990-01-01)' }),
  
  departure_date: z.string()
  .nullable()
  .refine((dateString) => {
    const date = new Date(dateString)
    return !isNaN(date.getTime())
  },{ message: 'Fecha de partida fuera de rango (Minimo 1990-01-01)'})
  .default(null),
  
  company: z.enum(['Technologyline', 'Realcolor', 'Linetechnology', 'Tline']),

  civilstatus: z.enum(['soltero', 'casado', 'separado', 'divorciado', 'viudo', 'soltera', 'casada', 'separada', 'divorciada', 'viuda']),
  activo: z.boolean().default(true)
})

export default function validateEmployee(object) {
  return employeeSchema.safeParse(object)
}

export function validatePartialEmployee(input) {
  return employeeSchema.partial().safeParse(input)
}