import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export const registerController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password_hash: z.string().min(6),
  })

  const { name, email, password_hash } = registerBodySchema.parse(request.body) // Ele da um throw automático
  await prisma.user.create({
    data: {
      email,
      name,
      password_hash,
    },
  })
}
