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

function greet(name) {
    console.log('Hello - ', name)
}

const arrow = (name) => {
    console.log('Привет - ', name)
}

arrow('Alex')

const arrow2 = name => console.log('Привет - ', name)

arrow2('Maxim')

