import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

// Config prisma for show logs in develop
export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
