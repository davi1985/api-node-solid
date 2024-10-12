import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

const { data, success, error } = envSchema.safeParse(process.env)

if (!success) {
  console.log('❌ Invalid environment variables', error.format())

  throw new Error('Invalid environment variables')
}

export const env = data
