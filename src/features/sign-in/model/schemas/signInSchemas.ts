import { z } from 'zod/v4'

export const signInSchemas = z.object({
  email: z.email({ error: 'Incorrect email address' }),
  password: z.string().min(1, { error: 'Please enter a password' }),
})
