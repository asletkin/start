// 1 Функции
// Function Declaration
// function greet(name) {
//     console.log('Hello - ', name)
// }
//
// // Function Expression
// const greet2 = function(name) {
//     console.log('Hello2 - ', name)
// }
//
//
// greet('Lena')
// greet2('Cat')

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//     console.log(++counter)
// }
// })

// 3 Стрелочные функции

// function greet(name) {
//     console.log('Hello - ', name)
// }

// const arrow = (name) => {
//     console.log('Привет - ', name)
// }

// arrow('Alex')

// const arrow2 = name => console.log('Привет - ', name)

// arrow2('Maxim')

// 4 Параметры по умолчанию

// const sum = (a, b) => a + b
// console.log(sum(41, 1))

// function sumAll(...all) {
// let result = 0
// for (let num of all) {
//     result += num
// }
// return result
// }
// const res = sumAll(1, 2, 3, 4, 5, 6)
// console.log(res)

// 5 Замыкания

// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
// }

// const LogWithLastName = createMember('Alex ')
// console.log(LogWithLastName('Slet'))
// console.log(LogWithLastName('Sletkin'))




