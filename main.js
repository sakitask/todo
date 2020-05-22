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
  btn.onclick = () => {
    todos.splice(index, 1);
    displayTodos(todos);
  }
  return btn;
}
const createStatusBtn = (status) => {
  const btn = document.createElement('button');
  btn.textContent = status;
  btn.type = 'button';
  return btn;
}

  const displayTodos = (todos) => {
    while (list.firstChild) list.removeChild(list.firstChild);
    let count = -1;
    todos.forEach(todo => {
      const elm = document.createElement('tr');
      count++;
      for(let i = 0; i < 4; i++) {
        const td = document.createElement('td');
        switch (i) {
          case 0:
            td.textContent = count;
            break;
          case 1:
            td.textContent = todo['task'];
            break;
          case 2:
            td.appendChild(createStatusBtn('作業中'));
            break;
          case 3:
            td.appendChild(createDeleteBtn(count));
            break;
        }
        elm.appendChild(td);
      };
      list.appendChild(elm);
    });
    text.value = '';
  }
}());
