const cars = ['BMW', 'Mercedes', 'Opel'];
console.log(cars);
const morecars = ['Tesla', ...cars]
console.log(morecars);

function makesum(a, b, c){
  console.log(a+b+c);
}
makesum(1,2,3);

const numbers = [3, 6, 9, 10];
makesum(...numbers);