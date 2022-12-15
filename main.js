const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const names = ['Carlos', 'María', 'Isidro', 'Cristina', 1];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];



// ---------------------1------------------

// countries.forEach(e => console.log(e))

// // ----------------------2----------------
// names.forEach(e => console.log(e))

// // ----------------------3---------------
// numbers.forEach(e => console.log(e))



// -----------------------4----------------

// console.log(countries.map(e => e.toUpperCase()))

// ---------------------5---------------

// console.log(countries.map(e=> e.length));


// --------------------------6----------------------

// console.log(numbers.map(i => i**2))


// -------------------------7--------------------

// console.log(names.map(e => e.toUpperCase()))


// ----------------------------8----------------


// console.log(products.map(e => e.price));


// -----------------9------------------

// console.log(countries.filter(e => e.includes('land')));

// ----------------10----------------


// console.log(countries.filter(e => e.length === 6));

// ------------------11-----------------

// console.log(countries.filter(e => e.length >= 6));

// ------------------12---------------------


// console.log(countries.filter(e => e.startsWith('E')));

// -------------------13---------------------


// console.log(products.filter(e => e.price && e.price !== ' '));

// --------------------------14----------------

// const getStringLists = (arr) =>{
//     return arr.filter(e => typeof e === 'string')
// }

// -------------15-----------------

// console.log(numbers.reduce((acc,i) => acc +=  i))



