import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { date } from 'zod'

export const app = fastify()
const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Hamilton Silva',
    email: 'hamiltonsilva.dev@gmail.com',
    password_hash: 'sdfweg43wefsd32',
  },
})
