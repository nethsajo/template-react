import { useGetTodo } from 'modules/todos/hooks';
import { useParams } from 'react-router-dom';

export default function TodoPage() {
  const { id } = useParams();

  const { data: todo = {}, isLoading } = useGetTodo(id);

  if (isLoading) return <div>Loading...</div>;

  return <div>{JSON.stringify(todo, null, 2)}</div>;
}
