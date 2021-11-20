const str = 'JavaScript';
const fancyString = ({ str }) => {
  const newStr = [];
  let counter = 0;
  str.split('').reduce((prev, current, arr) => {
    newStr.push([prev, current].join(''));
    if (counter > 1) newStr[newStr.length - 2] += current;
    counter++;
    return current;
  });
  return newStr;
};
console.log(fancyString({ str }));

const str2 = 'Каждый охотник желает знать, где сидит фазан';
const newStr2 = str2.split(' ' || ', ').map((word) => word[0]);
console.log(newStr2);

const arr = [0, 1, 2, 3, 4, 5, 6, 7];
const pairs = ({ arr }) => {
  const result = [];
  const duoArr = arr.map((numberI, idx, iterableArr) => {
    const returnableNumber = iterableArr.find(
      (numberJ) => numberI + numberJ === 7,
    );
    if (!result.includes([numberI, returnableNumber].reverse().join(':')))
      result.push([numberI, returnableNumber].join(':'));
    return [numberI, returnableNumber].join(':');
  });
  return result;
};

console.log(pairs({ arr }));

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const consecutiveSum = ({ nums }) => {
  const fib = [];
  nums.reduce((acc, number, idx) => {
    if (idx === 1) {
      fib.push(nums[0]);
      fib.push(acc + number);
      return acc + number;
    }
    fib.push(acc + number);
    return acc + number;
  });
  return fib;
};
console.log(consecutiveSum({ nums }));

const generateNumbers = ({ start, len }) => {
  const ascArr = [];
  for (let i = start; i < start + len; i++) ascArr.push(i);
  return ascArr;
};
console.log(generateNumbers({ start: -5, len: 5 }));

const coupledArray = [1, 6, 5, 2, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
const findCouple = ({ array, number }) => {
  array.map((coupleNumber1, idx, iterableArray) => {
    const coupleNumber2 = iterableArray.find(
      (tempNum) => tempNum + coupleNumber1 === number,
    );
    if (coupleNumber2)
      console.log(`couple ${idx + 1} is ${coupleNumber1} - ${coupleNumber2}`);
  });
};
findCouple({ array: coupledArray, number: 10 });

const falsification = [NaN, 0, -0, '', {}, undefined, null, Infinity, 99];
console.log(falsification.filter((item) => Boolean(item) === true));

const findFrequently = ({ frequently }) => {
  const variants = {};
  frequently.forEach((item) => {
    if (variants[item]) variants[item] += 1;
    else variants[item] = 1;
  });
  let freq;
  for (key in variants) {
    if (freq && variants[freq] > variants[key]) continue;
    else freq = key;
  }
  return freq;
};
console.log(
  findFrequently({ frequently: ['z', 8, 9, 5, 'z', 'o', 'z', 8, 8] }),
);

const merge1 = [1, 2, 6, 3];
const merge2 = [2, 3, 'q', 8];
const union = ({ arr1, arr2 }) => {
  let newArr = arr1.filter((item) => !arr2.includes(item));
  newArr = [...newArr, ...arr2.filter((item) => !arr1.includes(item))];
  return newArr;
};
console.log(union({ arr1: merge1, arr2: merge2 }));

const uArr1 = [1, 2, 3, 'q', '6', 1, 2];
const uArr2 = [2, 3, 8, '11', 4, 2, 3, 6, 36];
const unique = ({ arr1, arr2 }) => {
  const common = [...arr1, ...arr2];
  const newCommon = [];
  common.forEach((item) => {
    if (!newCommon.includes(item)) newCommon.push(item);
  });
  return newCommon;
};
console.log(unique({ arr1: uArr1, arr2: uArr2 }));

const expp = [1, [2, 3, [4, 5, 6], [7, 8, 9]]];
const expand = ({ toBeExpanded }) => {
  const newArr = [];
  toBeExpanded.forEach((item, idx, array) => {
    if (typeof item !== 'object') newArr.push(item);
    else newArr.push(...expand({ toBeExpanded: item }));
  });
  return [...newArr];
};
console.log(expand({ toBeExpanded: expp }));

let uniqueStr = ['JaVaScript', 'javascript', 'login', 'face', 'FACE'];
const uniqueTheString = ({ uniArr }) => {
  const newUnique = [];
  uniArr.forEach((word) => {
    if (
      !newUnique.find((uniWord) => word.toLowerCase() === uniWord.toLowerCase())
    )
      newUnique.push(word);
  });
  return newUnique;
};
uniqueStr = uniqueTheString({ uniArr: uniqueStr });
console.log(uniqueStr);
