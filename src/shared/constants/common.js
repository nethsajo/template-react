import { format } from 'date-fns';

export const logger = ({ path, event, log }) => {
  const date = format(new Date(), 'yyyy/MM/dd hh:mm:ss');
  // eslint-disable-next-line no-console
  console.debug(`[${date}]: ${path} (${event}) >> `, JSON.stringify(log, null, 2));
};

export const ROUTES = {
  TODOS: '/todos',
  LOGIN: '/login',
  ABOUT: '/about',
  HOME: '/',
};
