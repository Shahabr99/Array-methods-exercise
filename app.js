//Double values
function doubleValues(arr) {
  const newArr = arr.map((el) => el * 2);
  return newArr;
}
doubleValues([1, 2, 3]);
doubleValues([5, 1, 2, 3, 10]);

//OnlyEvenValues
function onlyEvenValues(array) {
  return array.filter(function (num) {
    return num % 2 === 0;
  });
}
onlyEvenValues([1, 2, 3]);
onlyEvenValues([5, 1, 2, 3, 10]);

//First and last letters
function showFirstAndLast(array) {
  return array.map(function (name) {
    return name[0] + name[name.length - 1];
  });
}
showFirstAndLast(["colt", "matt", "tim", "test"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

//add key and value
function addKeyAndValue(array, key, value) {
  array.forEach((obj) => (obj[key] = value));
  return array;
}

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

//vowel count
function vowelCount(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let obj = {};
  const array = string.toLowerCase().split("");
  array.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        //if it finds matching letter.
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}

console.log(vowelCount("Meteor"));

//doubleValuesWithMap
function doubleValuesWithMap(array) {
  return array.map(function (num) {
    return num * 2;
  });
}

doubleValuesWithMap([1, -2, -3]);

//ValTimesIndex
function valTimesIndex(array) {
  return array.map((num, i) => num * i);
}
console.log(valTimesIndex([1, -2, -3]));

//ExtractKey
function extractKey(array, key) {
  return array.map((obj) => obj[key]);
}

console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);

//Extract Full Name
function extractFullName(array) {
  return array.map(function (obj) {
    return `${obj.first} ${obj.last}`;
  });
}

console.log(
  extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
  ])
);

//filter by value
function filterByValue(array, key) {
  return array.filter(function (obj) {
    if (obj.isCatOwner) {
      return [obj];
    }
  });
}

console.log(
  filterByValue(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner"
  )
);

//find
function find(array, value) {
  const newArr = array.filter((element) => element === value);
  return newArr.length > 0 ? newArr[0] : undefined;
}
console.log(find([1, 2, 3, 4, 5], 3));

//find in Object
function findInObj(array, key, value) {
  const newArr = array.filter((element) => element[key] === value);
  return newArr[0];
}

console.log(
  findInObj(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "att", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner",
    true
  )
);

//Remove vowels
function removeVowels(string) {
  let wovels = "AaEeOoIiUu";
  const wovelArray = wovels.split("");
  const wordArray = string.split("");

  const filteredArr = wordArray.filter(function (letter) {
    if (wovelArray.indexOf(letter) === -1) {
      return letter;
    }
  });
  return filteredArr.join("").toLowerCase();
}

console.log(removeVowels("TIM"));

//double odd numbers
function doubleOddNumbers(array) {
  return array
    .filter((element) => element % 2 !== 0)
    .map((element) => element * 2);
}
console.log(doubleOddNumbers([4, 4, 4, 4, 4]));
