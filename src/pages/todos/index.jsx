import { PrivateRoute } from '@Modules/partials';
import { Todos } from '@Modules/todos';
import { TodoService } from '@Modules/todos/services';

const TodosPage = () => {
  const params = { limit: 10 };
  const todos = TodoService.list(params);

  console.log(todos);

  return (
    <PrivateRoute>
      <Todos />;
    </PrivateRoute>
  );
};

export default TodosPage;
