import z from 'zod'

const conceptsSchema = z.object({
  name: z.string({
    required_error: 'Se requiere nombre de concepto',
    invalid_type_error: 'El nombre debe de ser de tipo string/texto'
  }),
  type: z.enum(['REMUNERATIVO', 'NO REMUNERATIVO', 'DESCUENTO'])
})

export default function validateConcept(object) {
  return conceptsSchema.safeParse(object)
}

export function validatePartialConcept(input) {
  return conceptsSchema.partial().safeParse(input)
}