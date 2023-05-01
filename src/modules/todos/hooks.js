import { TodoService } from './services';

import { useQuery } from '@tanstack/react-query';

export const useGetTodos = params => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => TodoService.list(params),
  });
};
