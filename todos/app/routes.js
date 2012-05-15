dojo.provide('client.routes');

mulberry.page('/todos', {
  name : 'Todos',
  pageDef : 'todos'
}, true);

mulberry.page('/completed', {
  name : 'Completed',
  pageDef : 'completed'
});

mulberry.pageDef('todos', {
  capabilities : [ 'PageTodos' ],
  screens : [
    {
      name : 'index',
      regions : [
        {
          className : 'todo-form-container',
          components : [ 'custom.TodoForm' ]
        },
        {
          className : 'todo-list-container',
          scrollable : true,
          components : [ 'custom.TodoList' ]
        },
        {
          className : 'todo-tools-container',
          components : [ 'custom.TodoTools' ]
        }
      ]
    }
  ]
});

mulberry.pageDef('completed', {
  capabilities : [ 'PageCompleted' ],
  screens : [
    {
      name : 'index',
      regions : [
        {
          className : 'nav-bar-container',
          components : [ 'custom.NavBar' ]
        },
        {
          className : 'todo-list-container',
          scrollable : true,
          components : [
            'custom.TodoList'
          ]
        }
      ]
    }
  ]
});

