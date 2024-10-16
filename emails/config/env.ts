import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
    WHATSAPP: z.string().url(),
    HULY: z.string().url()
})

export const env = envSchema.parse(process.env)