(function () {
  const list = document.getElementById('list');
  const text = document.getElementById('text');
  const add = document.getElementById('add');
  const todos = [];
  add.addEventListener('click', () => {
    const todo = {
      task: text.value,
      status: '作業中'
    }
    todos.push(todo);
    displayTodos(todos);
  });
const createDeleteBtn = (index) => {
  const btn = document.createElement('button');
  btn.textContent = '削除';
  btn.type = 'button';
  btn.addEventListener('click', () => {
    todos.splice(index, 1);
    displayTodos(todos);
  });
  return btn;
}
const createStatusBtn = (status, index) => {
  const btn = document.createElement('button');
  btn.textContent = status;
  btn.type = 'button';
  btn.addEventListener('click', () => {
    if(todos[index]['status'] === '作業中') {
      todos[index]['status'] = '完了';
    } else {
      todos[index]['status'] = '作業中';
    }
    btn.textContent = todos[index]['status'];
  });
  return btn;
}

  const displayTodos = (todos) => {
    while (list.firstChild) list.removeChild(list.firstChild);
    let count = -1;
    todos.forEach((todo, index) => {
      const elm = document.createElement('tr');
      const idTd = document.createElement('td');
      idTd.textContent = index;
      elm.appendChild(idTd);
      const taskTd = document.createElement('td');
      taskTd.textContent = todo['task'];
      elm.appendChild(taskTd);
      const statusTd = document.createElement('td');
      statusTd.appendChild(createStatusBtn('作業中', index));
      elm.appendChild(statusTd);
      const deleteTd = document.createElement('td');
      deleteTd.appendChild(createDeleteBtn(index));
      elm.appendChild(deleteTd);
      list.appendChild(elm);
    });
    text.value = '';
  }
}());
