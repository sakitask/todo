(function () {
  const list = document.getElementById('list');
  const text = document.getElementById('text');
  const btn = document.getElementById('btn');
  const todos = [];
  btn.addEventListener('click', () => {
    const todo = {
      index: todos.length,
      task: text.value,
      status: '作業中',
      del: '削除'
    }
    todos.push(todo);
    dislayTodos(todos);
  });
  const dislayTodos = (todos) => {
    while (list.firstChild) list.removeChild(list.firstChild);
    for(let todo in todos) {
      const elm = document.createElement('tr');
      for(let key in todos[todo]) {
        if(key == 'status' || key == 'del') {
          const td = document.createElement('td');
          const btn = document.createElement('button');
          btn.textContent = todos[todo][key];
          td.appendChild(btn);
          elm.appendChild(td);
        } else {
          const td = document.createElement('td');
          td.textContent = todos[todo][key];
          elm.appendChild(td);
        }
      }
      list.appendChild(elm);
    }
    text.value = '';
  }
}());
