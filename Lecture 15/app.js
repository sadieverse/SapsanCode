// HOMEWORK

// LECTURE 11

// TASK1
// age categories

// const age = +prompt('Enter your age');
// if (age >= 0 && age < 14){
//     console.log('You are a child')
// }
// if (age >= 14 && age < 22){
//     console.log('You are a teen')
// }
// if (age >= 22 && age < 30){
//     console.log('You are young')
// }
// if (age >= 30 && age <= 100){
//     console.log('You are an adult')
// }

// TASK2
// calculate body mass index

// let a = prompt('Enter your gender');
// let b = +prompt('Enter your height');
// let c = +prompt('Enter your waist width');
// let d = 76 - (20*b/c);
// let e = 64 - (20*b/c);
// if(a = 'female'){
//     console.log(d);
// }
// else{
//     console.log(c);
// }


// LECTURE 12

// TASK1
// FIND AN AVERAGE OF TWO NUMBERS

// let a = +prompt('first number','');
// let b = +prompt('second number','');
// console.log((a+b)/2);

// TASK2
// FIND A REMAINDER FROM TWO NUMBER'S DEVISION

// let a = +prompt('first number','');
// let b = +prompt('second number','');
// console.log(a % b);


// LECTURE 13

// TASK1
// SHOW 1 TO 5

// for(i=1;i<6;i++){
//     console.log(i);
// }

// TASK2
// SHOW 5 TO 1

// for(i=5;i>0;i--){
//     console.log(i);
// }

// TASK3
// MULTIPLICATION TABLE FOR 3

// let a = 3;
// let result;
// for (var i = 1; i <= 10 ; i++) {
//     result = a * i;
//     console.log(result);
// }

// TASK4
// ADD UP ALL THE NUMBERS PRECEDING THE INPUT

// let a = +prompt('enter an integer');
// let result = 0;
// for (let i = 1; i <= a; i++) {
//     result+=i;
// }
// console.log(result);

// TASK5
// FIND ALL THE ODD NUMBERS PRECEDING THE INPUT

// let a = +prompt('enter an integer');
// for(i = 0; i <= a; i++) {
//     if(i % 2 != 0) {
//     console.log(i);
//     }
// }

// TASK6
// FIND ALL THE EVEN NUMBERS PRECEDING THE INPUT

// let a = +prompt('enter an integer');
// for(i = 1; i <= a; i++) {
//     if(i % 2 == 0) {
//     console.log(i);
//     }
// }

// TASK7
// MULTIPLICATION NUMBER FOR THE INPUT

// let a = +prompt('enter an integer');
// let result;
// for (var i = 1; i <= 10 ; i++) {

//     result = a * i;
    
//     console.log(result);
// }

// TASK8
// REVERSE MULTIPLICATION NUMBER FOR THE INPUT

// let a = +prompt('enter an integer');
// let result;
// for (var i = 10; i >= 1 ; i--) {

//     result = a * i;
    
//     console.log(result);
// }

// TASK9
// FIND OUT IF INPUT NUMBER IS PRIME OR NOT

// const a = +prompt('Enter number');
// let isPrime = true;
// for (let i = 2; i <= a/2; i++) {
//   if (a % i === 0) {
//     isPrime = false;
//     console.log(a, i, a % i)
//     break;
//   }
// }
// console.log(isPrime ? 'yes' : 'no');


// LECTURE 14 --- ARRAYS

// TASK1
// ARRAY FROM 1 TO 100

// 1.1
// DISPLAY AN ARRAY

// let numbers = [];
// for (i=1;i<=100;i++){
//     numbers.push(i);
// }
// console.log(numbers);

// 1.2
// DISPLAY ALL THE ELEMENTS

// let numbers = [];
// for (i=1;i<=100;i++){
//     numbers.push(i);
//     console.log(i);
// }

// 1.3
// REVERSE

// let numbers = [];
// for (i=100;i>=1;i--){
//     numbers.push(i);
// }
// console.log(numbers);

// 1.4
// REVERSE ONLY ELEMENTS

// let numbers = [];
// for (i=100;i>=1;i--){
//     numbers.push(i);
//     console.log(i);
// }


// TASK2
// ODD NUMBERS FROM 1 TO 99 - WHOLE ARRAY

// let numbers = [];
// for (i=1;i<=99;i++){
//     if(i % 2 != 0){
//     numbers.push(i);
//  }
// }
// console.log(numbers);

// TASK3
// EVEN NUMBERS FROM 2 TO 20 - ONLY ELEMENTS

// let numbers = [];
// for (i=2;i<=20;i++){
//     if(i % 2 == 0){
//     numbers.push(i);
//     console.log(i);
//  }
// }

// TASK4
// SUM OF THE ELEMENTS OF THE PREVIOUS ARRAY

// let result = 0;
// let numbers = [];
// for (i=2;i<=20;i++){
//     if(i % 2 == 0){
//     numbers.push(i);
//     result+=i;
//  }
// }
// console.log(result);

// TASK5
// REMOVE UNWANTED ELEMENT TYPES FROM AN ARRAY

// const array = [null, 1, 0, 'f', 5, undefined, 'g'];
// for (i = 0; i <= array.length; i++){
// if (typeof array[i] === null && typeof array[i] === undefined) {
//     array.splice(i);
//     console.log(array);
// } 
// }  ---------------------i came up with smth like this so far but it does not work


// TASK6
// DEFINE THE LARGEST NUMBER FROM AN UNORDERED ARRAY

// const someNumbers = [5, 9, 2, 1, 25, 44, 3, 6];
// console.log(Math.max(...someNumbers));

// TASK7
// DEFINE THE SMALLEST NUMBER FROM AN UNORDERED ARRAY

// const someNumbers = [5, 9, 2, 1, 25, 44, 3, 6];
// console.log(Math.min(...someNumbers));

// TASK8
// COMPARE 2 ARRAYS ON THEM BEING IDENTICAL OR NOT

// ver. TRUE

// let first = ['a', 2, 4, null, 'b'];
// let second = ['a', 2, 4, null, 'b'];
// const isTrue = 'identical';
// const isFalse = 'not identical';
// if (first.length !== second.length){
//    console.log(isFalse);
// }
//     else {
//       for (i = 0; i < first.length; i++) {
//         if (first[i] !== second[i]) {
//             break;
//             console.log(isFalse);
//         }
//         else{
//             console.log(isTrue);
//         }
//       }
//     }

// ver. FALSE --------------------------------does not work the exact way as true, needs improvement

// let first = ['a', 2, 4, null, 'b'];
// let second = ['a', 1, 4, null, 'b'];
// const isTrue = 'identical';
// const isFalse = 'not identical';
// if (first.length !== second.length){
//    console.log(isFalse);
// }
//     else {
//       for (i = 0; i < first.length; i++) {
//         if (first[i] !== second[i]) {
//             console.log(isFalse);
//         }
//         else{
//             console.log(isTrue);
//         }
//       }
//     }

// LECTURE 15 ~ FUNCTIONS
// array.reverse function
// find 'bad' elements in js

// TASK1
// CALCULATOR

// function calculator(){
//     const c = +prompt('enter the first number');
//     const b = +prompt('enter the second number');
   
//     console.log(`+ is ${(c + b)}. - is ${(c - b)}. * is ${(c * b)}. / is ${(c / b)}.`)
// }
// calculator();

// TASK2
// CREATE ARRAY FROM AN INPUT

// function makeArray(){
//     let someArr = [];
//     let element = prompt('enter anything');
//     let n = +prompt('enter a number');
//     for(i = 1; i<=n; i++){0
//     someArr = someArr.concat(element);
//     }
//     console.log(someArr);
// }
// makeArray();

// TASK3 
// FILTER ARRAY FROM A SPECIFIC ELEMENT

// function removeElement(n){
//     let someArr = [1, 'a', 'b', 2, 3, 'c'];
//     for(i=0; i<=someArr.length;i++){
//         if(someArr[i] === n){
//         someArr.splice(i);
        
//     }
//     }
//     console.log(someArr);
// }
// removeElement(3);