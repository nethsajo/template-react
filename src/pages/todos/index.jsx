import { Todos } from '@Modules/todos';
import { TodoService } from '@Modules/todos/services';

const TodosPage = () => {
  const params = { limit: 10 };
  const todos = TodoService.list(params);

  // eslint-disable-next-line no-console
  console.log(todos);

  return <Todos />;
};

export default TodosPage;
