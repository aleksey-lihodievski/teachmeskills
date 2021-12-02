const renderTasks = (data) => {
  const cartHolder = document.querySelector('#cartHolder');
  cartHolder.innerHTML = '';

  data.todos.forEach((obj) => {
    const item = document.createElement('div');
    item.classList.add('card');

    const itemTitle = document.createElement('p');
    itemTitle.setAttribute('class', 'text title');
    itemTitle.innerHTML = `Title: ${obj.title}`;

    const itemDescription = document.createElement('p');
    itemDescription.setAttribute('class', 'text description');
    itemDescription.innerHTML = `Description: ${obj.description}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');

    deleteButton.innerHTML = 'delete';
    editButton.innerHTML = 'edit';

    const btnsWrapper = document.createElement('div');
    btnsWrapper.classList.add('btns-wrapper');

    btnsWrapper.appendChild(deleteButton);
    btnsWrapper.appendChild(editButton);

    item.appendChild(itemTitle);
    item.appendChild(itemDescription);
    item.appendChild(btnsWrapper);

    cartHolder.appendChild(item);
  });

  const deleteBtns = document.querySelectorAll('.delete-btn');

  deleteBtns.forEach((deleteBtn, idx) => {
    deleteBtn.addEventListener('click', (e) => deleteTask(e, data, idx));
  });
};

const appendTask = (e, data) => {
  e.preventDefault();

  const formObj = {
    title: title.value,
    description: description.value,
  };
  if (formObj.title && formObj.description) data.todos.push(formObj);

  renderTasks(data);

  form.reset();
};

const deleteTask = (e, data, idx) => {
  data.todos.splice(idx, 1);
  renderTasks(data);
};

const init = () => {
  const h1 = document.querySelector('#h1');
  h1.textContent = 'Todo list';

  const form = document.querySelector('#form');

  const data = {
    todos: [],
    inProgress: [],
    done: [],
  };

  form.addEventListener('submit', (e) => appendTask(e, data));
};

init();
