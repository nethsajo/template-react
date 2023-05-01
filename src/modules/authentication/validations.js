import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email address is invalid').toLowerCase(),
  password: z.string().min(8, 'Password must be at least 8 characters long.'),
});
