let idToEdit;

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
  const editBtns = document.querySelectorAll('.edit-btn');

  const items = document.querySelectorAll('.card');

  items.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit-btn')) editTask(e, data, idx);
      if (e.target.classList.contains('delete-btn')) deleteTask(e, data, idx);
    });
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

const editTask = (e, data, idx) => {
  idToEdit = toggleModal(e, idx);

  document.querySelector('.edited-title').value = data.todos[idToEdit].title;
  document.querySelector('.edited-description').value =
    data.todos[idToEdit].description;

  const submitBtn = document.querySelector('.submit-btn');
};

const submitTask = (e, data) => {
  e.preventDefault();

  const newdata = {
    title: document.querySelector('.edited-title').value,
    description: document.querySelector('.edited-description').value,
  };
  if (newdata.title && newdata.description) {
    data.todos[idToEdit] = newdata;
    toggleModal(e);
    renderTasks(data);
  }
};

const toggleModal = (e, idx) => {
  e.preventDefault();

  document.querySelector('.modal-wrapper').classList.toggle('open');
  return idx;
};

const init = () => {
  const h1 = document.querySelector('#h1');
  h1.textContent = 'Todo list';

  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', (e) => submitTask(e, data));

  const closeModal = document.querySelector('.close-btn');
  closeModal.addEventListener('click', (e) => toggleModal(e));

  const form = document.querySelector('#form');

  const data = {
    todos: [],
    inProgress: [],
    done: [],
  };

  form.addEventListener('submit', (e) => appendTask(e, data));
};

init();
