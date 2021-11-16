const showInfo = ({ sex, surname, userName, patronymic, age, retired }) => {
  alert(
    `Hi, ${
      sex === 'male' ? 'Mr. ' : 'Ms. '
    } ${surname}, your name is ${userName} and patronymic ${patronymic}, your age in ${age}, it is ${
      age * 365
    } days, ${
      retired ? 'you are retired' : 'you are fresh and hungry for work'
    }, five years till now you will be ${age + 5} yo`,
  );
};

const isRetired = ({ sex, age }) => {
  if ((sex === 'female' && age >= 55) || (sex === 'male' && age >= 65))
    return true;
  else return false;
};

const init = () => {
  const [surname, userName, patronymic] = prompt(
    'Enter your credentials',
  ).split(' ');
  let age = Number(prompt('Enter your age'));
  while (isNaN(age)) {
    age = Number(prompt('Enter your actual age'));
  }
  const sex = prompt('Enter your sex');

  const retired = isRetired({ sex, age });

  showInfo({ sex, surname, userName, patronymic, age, retired });
};

init();
