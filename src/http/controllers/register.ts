import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { RegisterCasoUse } from '@/use-case/register'

export const registerController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body) // Ele da um throw automático
  try {
    await RegisterCasoUse({
      name,
      email,
      password,
    })
  } catch (error) {
    reply.status(409).send()
  }
  return reply.status(201).send()
}
