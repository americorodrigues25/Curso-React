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

// destructuring com arrays
const fruits = ["Maça", "Banana", "Laranja"];

const [f1, f2, f3] = fruits;

console.log(f2);

// destructuring com objetos
const productsDetails = {
  name: "teclado",
  price: 179.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productsDetails;

console.log(
  `O nome do produto é ${productName}, custa R$ ${price}, pertence a categoria ${productCategory} e a cor é ${color}`
);

// spread operator com arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a1, 4];
console.log(a4);

// spread operator com objetos
const carName = { name: "Gol" };
const CarBrand = { brand: "VW" };
const otherInfos = { km: 15000, price: 49000 };

const car = { ...carName, ...CarBrand, ...otherInfos, wheels: 4 };

console.log(car);

// classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camiseta", 70);
console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis", 499);
console.log(tenis.productWithDiscount(20));

// heranca
class ProductsWithAtributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductsWithAtributes("Chapéu", 59.99, [
  "Preto",
  "Azul",
  "Verde",
]);

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();
