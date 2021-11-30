const h1 = document.querySelector('#h1');
h1.textContent = 'Todo list';

const resetBtn = document.querySelector('#resetBtn');

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const cartHolder = document.querySelector('#cartHolder');
const objs = [];

const renderTasks = () => {
  cartHolder.innerHTML = '';

  objs.map((obj) => {
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
    deleteBtn.addEventListener('click', () => deleteTask(idx));
  });
};

const appendTask = (e) => {
  e.preventDefault();

  cartHolder.innerHTML = '';
  const formObj = {
    title: title.value,
    description: description.value,
  };
  if (formObj.title && formObj.description) objs.push(formObj);

  objs.map((obj) => {
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
    deleteBtn.addEventListener('click', () => deleteTask(idx));
  });

  title.value = '';
  description.value = '';
};

const deleteTask = (idx) => {
  objs.splice(idx, 1);

  renderTasks();
};

form.addEventListener('submit', appendTask);
