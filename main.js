/*Destructuring Assignment là một biểu thức JavaScript cho phép bung các giá trị từ mảng hoặc thuộc tính từ đối tượng, thành các biến riêng biệt,
 dữ liệu có thể được trích xuất từ ​​mảng, đối tượng, đối tượng lồng nhau và gán cho các biến.*/


 var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(restof); // [30, 40, 50]

({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}

let names = ["alpha", "beta", "gamma", "delta"];
let [firstName, secondName] = names;

console.log(firstName);//"alpha"
console.log(secondName);//"beta"

//Both of the procedure are same
let [firstName1, secondName1] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName1);//"alpha"
console.log(secondName1);//"beta

let marks1 = {x1: 21, y1: -34, z1: 47 };

const { x1, y1, z1 } = marks1; // x = 21, y = -34, z = 47

console.log(x1);
console.log(y1);
console.log(z1);