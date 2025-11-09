import { z } from 'zod'

export const blockUserSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  isBlocked: z.boolean(),
  reason: z.string().max(500, 'Reason must be less than 500 characters').optional(),
})

export type BlockUserFormData = z.infer<typeof blockUserSchema>
