(function () {
  const list = document.getElementById('list');
  const text = document.getElementById('text');
  const add = document.getElementById('add');
  const form = document.getElementById('form');
  const statusList = form.list;
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
const wipChange = () => {
  todos.forEach((todo, index) => {
    if(todo['status'] == '作業中') {
      list.children[index].style.display = 'table-row';
    } else {
      list.children[index].style.display = 'none';
    }
  });
}
const doneChange = () => {
  todos.forEach((todo, index) => {
    if(todo['status'] == '完了') {
      list.children[index].style.display = 'table-row';
    } else {
      list.children[index].style.display = 'none';
    }
  });
}
const allChange = () => {
  todos.forEach((todo, index) => {
    list.children[index].style.display = 'table-row';
  });
}
const statusChange = () => {
  statusList.forEach((item, index) => {
    if(item.checked) {
      switch(item.value) {
        case 'wip':
          wipChange();
          break;
        case 'done':
          doneChange();
          break;
        case 'all':
          allChange();
          break;
      }
    }
  });
}

  form.addEventListener('change', () => {
    statusChange();
  });

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
    const statusBtn = createStatusBtn(todos[index]['status'], index)
    statusTd.appendChild(statusBtn);
    elm.appendChild(statusTd);
    const deleteTd = document.createElement('td');
    const deleteBtn = createDeleteBtn(index)
    deleteTd.appendChild(deleteBtn);
    elm.appendChild(deleteTd);
    list.appendChild(elm);
  });
  text.value = '';
  statusChange();
}
}());
