import { z } from 'zod';

const title = z.string().min(1, { message: 'Title is required' });
const description = z
  .string()
  .min(1, { message: 'Description is required' })
  .max(100, { message: 'Description must be 100 or fewer characters long' });

export const todoSchema = z.object({
  title,
  description,
});
