const user = {
  firstname: 'John',
  lastname: 'Doe',
  age: 18,
  pet: { type: 'Rabbit' },
};

const numbers = [1, 'qwer', 3];
numbers.unshift(0);
numbers.push('four');
numbers.pop();
numbers.shift();
numbers.map((numb) => console.log(numb));

const data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40,
  },
  {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54,
  },
  {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24,
  },
];

const res = data.find((fellow) => fellow.lastName == 'Dakota');
console.log(res.firstName, res.lastName, res.age);
