import { z } from 'zod';

const title = z.string().min(1, { message: 'Required' });
const description = z.string().min(1).max(100, { message: 'Must be 100 or fewer characters long' });

export const todoSchema = z.object({
  title,
  description,
});
