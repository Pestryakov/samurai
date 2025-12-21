const numbers = [1, 5, 10, 15, 20];
const newNumbers = numbers.map((number) => {
  return number + 10;
});
console.log(newNumbers);

const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
const nameInfo = names.map((name) => {
  return {
    name: name,
    length: name.length,
  };
});
console.log(nameInfo);

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 50 },
  { name: 'Keyboard', price: 80 },
];

const productsWithFinalPrice = products.map((product) => {
  return {
    name: product,
    price: product.price,
    finalPrice: product.price * 0.85,
  };
});
console.log(productsWithFinalPrice);

const employees = [
  { name: 'Alice', salary: 50000, experience: 3 },
  { name: 'Bob', salary: 60000, experience: 5 },
  { name: 'Charlie', salary: 45000, experience: 2 },
];

const employeesWithTotal = employees.map((people) => {
  return {
    name: people.name,
    salary: people.salary,
    experience: people.experience,
    totalSalary: Math.round(people.salary * (1 + 0.05 * people.experience)),
  };
});

console.log(employeesWithTotal);
