import { useGetTodo } from '@Modules/todos/hooks';

import { useParams } from 'react-router-dom';

const TodoPage = () => {
  const { id } = useParams();

  const { data: todo = {}, isLoading } = useGetTodo(id);

  if (isLoading) return <div>Loading...</div>;

  return <div>{JSON.stringify(todo, null, 2)}</div>;
};

export default TodoPage;
