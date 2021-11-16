const [surname, userName, patronymic] = prompt('Enter your credentials').split(
  ' ',
);
const age = Number(prompt('Enter your age'));
const sex = prompt('Enter your sex');

alert(
  `Hi, ${
    sex === 'male' ? 'Mr' : 'Mrs'
  } ${surname}, your name is ${userName} and patronymic ${patronymic}, your age in ${age}, it is ${
    age * 365
  } days, ${
    (sex === 'female' && age >= 55) || (sex === 'male' && age >= 65)
      ? 'you are retired'
      : 'you are fresh and hungry for work'
  }, five years till now you will be ${age + 5} yo`,
);
