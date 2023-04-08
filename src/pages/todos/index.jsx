import React from 'react';

const AsyncTodos = React.lazy(() => import('@Modules/todos'));

const TodosPage = () => <AsyncTodos />;

export default TodosPage;
