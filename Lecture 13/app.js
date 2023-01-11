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

