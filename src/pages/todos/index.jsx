import { Todos } from 'modules/todos';
import { useGetTodos } from 'modules/todos/hooks';

export default function TodosPage() {
  const params = { limit: 10 };
  const { data: todos = [], isLoading } = useGetTodos(params);

  if (isLoading) return <div>Loading...</div>;

  return <Todos todos={todos} />;
}
