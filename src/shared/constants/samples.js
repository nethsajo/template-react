import { ROUTES } from './common';

import { nanoid } from 'nanoid';

export const SAMPLES = [
  {
    id: nanoid(),
    title: 'Todos',
    description:
      "You can easily keep track of your daily tasks and appointments. Whether it's a to-do list or work schedule, you'll never miss an important deadline again!",
    link: ROUTES.TODOS,
  },
  {
    id: nanoid(),
    title: 'Basic Authentication',
    description: 'A simple login with validations such as password strength requirements.',
    link: ROUTES.LOGIN,
  },
];
