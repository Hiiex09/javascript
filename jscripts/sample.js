// const student = {
//   fullname: "John Doe",
//   scores: [90, 85, 88],
//   courses: ["Math", "Science", "History"],
// };

// const { fullname, scores, courses } = student;
// console.log(`
//     Student Name: ${fullname}
//     Scores: ${scores.join(", ")}
//     Courses: ${courses.join(", ")}`);

const products = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 10000 },
  { name: "Headphones", price: 2000 },
];

// const totalProducts = products.reduce((total, item) => total + item.price, 0);
// console.log(`Total Price of Products: ${totalProducts.toFixed(2)}`);

// const premiumProducts = products.find((item) => item.price <= 10000);
// console.log(
//   `Premium Product: ${premiumProducts.name} - Price: ${premiumProducts.price}`
// );

const productNames = products.map((item) => item);
console.log(
  `Product Names: ${productNames
    .map(
      (item) =>
        item.name.charAt(0).toUpperCase() +
        "." +
        item.name.charAt(item.name.length - 1).toUpperCase()
    )
    .join(" ")}`
);
