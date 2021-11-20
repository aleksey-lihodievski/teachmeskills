const arr = ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'];
arr.splice(0, 3, 'Давай', 'танцевать');
console.log(arr);

const aboba = ['fasdfas', 2, 3, 'fasdfas', 4, 5];
const newarr = aboba.slice(1, 3);
console.log(newarr, aboba);

const extended = aboba.concat([6, 7]);
console.log(extended);

aboba.forEach((item, index, array) => {
  console.log(`${item} has index ${index} at [${array}]`);
});

const object = {
  a: 1,
  b: 2,
  c: 3,
};
for (key in object) {
  console.log(key);
}
for (key of aboba) {
  console.log(key);
}

console.log(aboba.includes('fasdfas'));

console.log(aboba.indexOf('fasdfas'), aboba.lastIndexOf('fasdfas'));

console.log(aboba.find((item) => item === 'fasdfas'));

const aboba2 = aboba.filter((item) => item !== 'fasdfas');
console.log(aboba2);

const aboba3 = aboba2.map((item) => item.toString());
console.log(aboba3);

const resAboba = aboba3.reduce((sum, current) => Number(sum) + Number(current)); // returns sum
console.log(resAboba);

const compare = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};

const arrSort = [2, 15, 12, 14, 94, 9];
arrSort.sort((a, b) => a - b);
console.log(arrSort);
