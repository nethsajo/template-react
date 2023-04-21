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
    title: 'Bankist',
    description:
      'Bankist is a fictional online banking application. It has been designed with minimalism in mind to offer a streamlined banking experience to its users.',
    link: '/',
  },
  {
    id: nanoid(),
    title: 'Expense Tracker',
    description:
      'Managing your expenses has never been easier. You can easily log your spending and keep track of your transactions all in one place!',
    link: '/',
  },
];
