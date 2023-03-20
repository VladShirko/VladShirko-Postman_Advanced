/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
*/


const names1 = ['Anastasia', 'Svetlana', 'Nikita', 'Viktar', 'Egor'];
const names2 = ['Svetlana', 'Egor', 'Nikita'];

function findInterception(arr1, arr2) {
  return arr1.filter(name => !arr2.includes(name));
}

module.exports = {
  names1,
  names2,
  findInterception,
};

const names = findInterception(names1, names2);
console.log('Names:',names);