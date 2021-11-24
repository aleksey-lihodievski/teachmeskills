const h1 = document.querySelector('#h1');
// console.log(h1.textContent);
h1.innerHTML = 'Hello h1';
// console.log(h1.textContent);
h1.textContent = 'Hello';

const divExample = document.querySelector('.div');
const example = divExample.querySelector('.example');
example.textContent = 'Exercise 5';
// console.log(example.closest('.div'));

// const card = document.querySelector('.card');
const innerExample = document.querySelector('.innerExample');
const input = document.querySelector('#input');

// card.addEventListener('click', (e) => {
//   if (e.target.id === 'deleteButton') {
//     innerExample.innerHTML = '';
//   } else if (e.target.id === 'editButton') {
//     innerExample.innerHTML = input.value;
//   }
//   // console.log(e.target, e.currentTarget);
// });

const resetBtn = document.querySelector('#resetBtn');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const titleParagraph = document.querySelector('#titleParagraph');
const descriptionParagraph = document.querySelector('#descriptionParagraph');
const todoTemplate = document.querySelector('#card');
const cartHolder = document.querySelector('#cartHolder');
const objs = [];
resetBtn.addEventListener('click', (e) => {
  cartHolder.innerHTML = '';
  const formObj = { title: title.value, description: description.value };
  if (formObj.title && formObj.description) objs.push(formObj);

  objs.map((obj) => {
    const item = document.createElement('div');
    item.setAttribute('class', 'card');
    const itemTitle = document.createElement('p');
    const itemDescription = document.createElement('p');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    itemTitle.setAttribute('class', 'text title');
    itemTitle.innerHTML = `Title: ${obj.title}`;
    itemDescription.setAttribute('class', 'text description');
    itemDescription.innerHTML = `Description: ${obj.description}`;
    deleteButton.innerHTML = 'delete';
    editButton.innerHTML = 'edit';

    item.appendChild(itemTitle);
    item.appendChild(itemDescription);
    item.appendChild(deleteButton);
    item.appendChild(editButton);

    cartHolder.appendChild(item);
  });
  title.value = '';
  description.value = '';
});
