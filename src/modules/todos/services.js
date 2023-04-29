import axios from 'axios';

class TodoClass {
  async list(params) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', params);

    if (params?.limit) data.splice(params.limit, data.length);

    return data;
  }
}

export const TodoService = new TodoClass();
