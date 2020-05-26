// 1 Переменные

// let name = 'Alex'
// let age = 41
// let lastName = prompt('Введите вашу фамилию')
// alert('Меня зовут ' + name + ' и мне ' + age + ' лет!')

// 2 Мутирование

// 3 Операторы

// let currentYear = 2020
// const birthYear = 1979
// const age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 5
// let c = 41
// c = c + a
// c += a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Alex'
// const age = 41
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов

// let fullAge = 41
// let birthYear = 1979
// let currentYear = 2020

// < >  >= <=
// let isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы

// let courseStatus = 'pending'

// if (courseStatus === 'ready') {
//    console.log('Курс готов')
// } else if (courseStatus === 'pending') {
//    console.log('Курс в процессе разработки')
// } else {
//    console.log('Курс не получился')
// }

// let isReady = true

// if (isReady) {
//    console.log('Все готово')
// } else {
//    console.log('Не готово')
// }

// Тернарное вырожение
// isReady ? console.log('Все готово') : console.log('Не готово')

// 7 Булевая логика

// 8 Функции

// function calculateAge(year) {
//    return 2020 - year
// }

// console.log(calculateAge(1979))

// function logInfoAbout(name, year) {
//    let age = calculateAge(year)
//   if (age > 0) {
//        console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//    } else {
//        console.log('Это будущее')
//    }
// }

// logInfoAbout('Alex', '2079')

// 9 Массивы
// let cars = new Array('Мазда', 'Мерседес', 'Форд')
// let cars = ['Мазда', 'Мерседес', 'Форд']
// cars[0] = 'Порш'
// cars[3] = 'Мазда'
// console.log(cars)
// console.log(cars[0])

// 10 Циклы
// let cars = ['Мазда', 'Мерседес', 'Форд', 'Порш']
// for (let i = 0; i < cars.length; i++) {
//    let car = cars[i]
//    console.log(car)
// }

// for (let car of cars) {
//    console.log(car)
// }

// 11 Объекты

// const person = {
//    firstName: 'Alex',
//    lastName: 'Slet',
//    year: 1979,
//    languages: ['Ru', 'En', 'De'],
//    hasWife: false,
//    greet: function () {
//        console.log('greet')
//    }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// person.greet()
