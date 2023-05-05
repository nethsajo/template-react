import { TodoService } from './services';

import { useQuery } from '@tanstack/react-query';

export const useGetTodos = params => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => TodoService.list(params),
  });
};

export const useGetTodo = id => {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => TodoService.get(id),
  });
};
