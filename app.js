let products = [
  {
    name: "Fiat",
    mark: 20000,
  },
  {
    name: "audi",
    mark: 50000,
  },
  {
    name: "Ford",
    mark: 300000,
  },
  {
    name: "Bentley",
    mark: 500000,
  },
  {
    name: "Mazda",
    mark: 15000,
  },
];
let finish = [];
products.sort((a, b) => a.mark - b.mark);
products.forEach((product) => {
  console.log(`${product.name}: ${product.mark}`);
});

// let a= prompt('salam')
// let reqem = [];
// for (let i = 0; i < 5; i++) {
//   reqem.push(Math.floor(Math.random() * 1000));
// }
// console.log("Reqemler:" + reqem.join(", |"));
// let sum = reqem.reduce((a, b) => a + b);
// console.log(sum);
