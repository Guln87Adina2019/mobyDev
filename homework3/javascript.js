//1tapsirma

let a =10;
let b = 5;
let c = 2;

//Сложение
let sum = a + b + c;
console.log("Сумма:", sum);

//Вычитание
let difference = a + c- b;
console.log("Разность:", difference);

//Умножение
let product = a * b / c;
console.log("Произведение:", product);

//Деление
let quotient = a % b ;
console.log("Частное:", quotient);

//2tapsirma
let x = 7;
console.log(x++ + ++x);

x = 7;
console.log(x-- - --x);

//3tapsirma
let num1 = 4 + 5;
console.log("The result is:",  num1);

//4tapsirma
let a1 = 10 - 3;
b1 = 4 + 2;
c1 = 5 - 3;
console.log( a1>b1 && a1>0&& b1>0);

let a2 = 4 - 2;
b2 = 1 + 1;
c2 = 6 - 4;
console.log(  c2<10 || c2==2);

let a3 = 8 - 5;
b3 = 3 + 2;
c3 = 7 - 4;
console.log( (a3/c3)  !=5);

//5tapsirma
let chislo = 10;
let  stroka = "10";
console.log(chislo ==stroka);
console.log(chislo ===stroka);
//raznitsa mezhdu == i === v tom, chto == sravnivaet tolko znachenie, a === sravnivaet i znachenie, i tip dannyh. V sluchae chislo 10 i stroka "10", == vernet true, potomu chto znacheniya ravny, no === vernet false, potomu chto tipy dannyh raznye (number i string).

//6tapsirma
console.log (((x % 2 ===0)||(x % 3 ===0))&&(x%6!==0));
console.log(!(x>10 || x<5));










