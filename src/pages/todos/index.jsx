import { Todos } from '@Modules/todos';
import { TodoService } from '@Modules/todos/services';

import React from 'react';

const TodosPage = () => {
  const params = { limit: 10 };
  const todos = TodoService.list(params);

  console.log(todos);

  return (
    <React.Fragment>
      <Todos />;
    </React.Fragment>
  );
};

export default TodosPage;
