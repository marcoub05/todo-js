import { crearTodoHtml, saludar } from './js/componentes';
import './styles.css';

import { Todo, TodoList } from './classes';

export const todoList = new TodoList();
// const tarea = new Todo('Aprender Javascript');

// todoList.nuevoTodo(tarea);
// crearTodoHtml(tarea);

todoList.todos.forEach(element => {
    crearTodoHtml(element);
});