import { Todos } from '@Modules/todos';
import { useGetTodos } from '@Modules/todos/hooks';

const TodosPage = () => {
  const params = { limit: 10 };
  const { data: todos = [], isLoading } = useGetTodos(params);

  if (isLoading) return <div>Loading...</div>;

  return <Todos todos={todos} />;
};

export default TodosPage;
