// arrow function
const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(10, 5));

const greeting = (name) => {
  if (name) {
    return "ola " + name + "!";
  } else {
    return "olá";
  }
};

console.log(greeting());
console.log(greeting("Americo"));

const user = {
  name: "americo",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log("Username: " + this.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log("Username: " + this.name);
    }, 1000);
  },
};

// user.sayUserName();
// user.sayUserNameArrow();

// filter
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
  if (n > 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "americo", avaliable: false },
  { name: "livia", avaliable: true },
  { name: "carla", avaliable: false },
  { name: "maya", avaliable: true },
];

const verifyUsers = users.filter((user) => user.avaliable);
const notVerifyUsers = users.filter((user) => !user.avaliable);

console.log(verifyUsers);
console.log(notVerifyUsers);

// map
const products = [
  { name: "camisa", price: 10.99, category: "roupas" },
  { name: "chaleira eletrica", price: 79.99, category: "eletro" },
  { name: "fogao", price: 499.99, category: "eletro" },
  { name: "calça jeans", price: 99.99, category: "roupas" },
];

products.map((product) => {
  if (product.category === "roupas") {
    product.onSale = true;
  }
});

console.log(products);
