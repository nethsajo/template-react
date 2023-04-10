import React from 'react';

const AsyncTodos = React.lazy(() => import('@Modules/todos'));

const TodosPage = () => {
  return <AsyncTodos />;
};

export default TodosPage;
