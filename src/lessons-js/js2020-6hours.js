

// // функции
// function calcAge(year) {
//     return 2020-year
// }
//
// function logInfo(name, year) {
//     const age = calcAge(year)
// }
//
// const cars = ['Mazda', 'Mersedes', 'Acura', 'Tayota']
//
//  for (let i = 0; i < cars.length; i++) {
//      const car =cars[i]
//      // console.log(car)
//  }
//
//  for (let car of cars) {
//      console.log(car)
//  }
//
//  //object



// console.log(0.2 + 0.4);
// console.log(+(0.4 + 0.2).toFixed(1) )

/*
// Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.max(42, 13, 12, 422))
console.log(Math.min(42, 13, 12, 422))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.4))
console.log(Math.trunc(4.6))
console.log(Math.random())
// 4 Example
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min)
}

console.log(getRandomBetween(10, 42));
*/

// //String
// const name = "Oleg";
// const age = 29
//
// function getAge() {
//     return age
// }
// const output = `Привет, меня зовут ${name} и мне ${age <18 ? 'слишком мало' : age} лет `
// console.log(output);

// const name = '   Oleg  '
// console.log()
// console.log(name.trim());
//
// function logPerson(s, name, age) {
//     console.log(s, name, age);
//     return 'Info about person'
// }
//
// const personName = 'Oleg'
// const personAge = 29
// const output = logPerson`Имя ${personName}, Возраст: ${personAge}`
//
// console.log(output);

// // function
// function greed(name) {
//     console.log('HI - ', name )
// }
//
// const greed2 = (name)=> {
//     console.log('hi2 -', name)
// }
// greed2('Лена')

// // Анонимные функции
// let counter= 0
// const interval = setInterval(function () {
//     if (counter === 10){
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// // Стрелочные функции
// function greed(name) {
//     console.log('Hello - ', name)
// }
//
// const greed2 = (name) => {
//     console.log('Hello - ', name)
// }
// greed('Elena')
// greed2('Marina')
//
// const pow2 = num => Math.pow(num, 2)
// console.log(pow2(5));
//4 параметры по умолчанию
// const sum = (a, b= 4) => a+b
// console.log(sum(4));
//
// function sumAll(...all) {
// let result = 0
//     for (let num of all){
//         result += num
//     }
//     return result
// }
//
//
// const res = sumAll(1,2,3,4,5,6,7)
// console.log(res);
//

// 5 ЗАмыкание
//
// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
//
// const logWithLastName =  createMember('Oleg')
// console.log(logWithLastName)

// 6 Масивы
const car = ['Mazda', 'Mersedes', 'Lexus', 'Toyota']

const fib = [1,1,2,3,5,8,13]

// car.push('Jeep')
// car.unshift('Reno')
// const firstItem = car.shift()
// console.log(firstItem);
// const lastItem = car.pop()
// console.log(lastItem);
// console.log(car.reverse());
//
//
// console.log(car)
// const index = car.indexOf('Toyota')
// car[index] = 'Porsche'
// console.log(car);

// const indexPeople = people.find((person)=>{
//     return person.budget === 1500
// })
// // console.log(indexPeople);
// let findedPerson
// for (const indexPeople of people) {
//     if (indexPeople.budget === 1500){
//         findedPerson = indexPeople
//     }
// }
// console.log('findedPerson :', findedPerson);

// console.log(car.includes('Mazda'));
// // const upperCaseCars = car.map(car => {
// //     return car.toUpperCase()
// // })
// // console.log(upperCaseCars);
// //
// const pow = el => Math.pow(el, 2)
// // // const sqrt = num => Math.sqrt(num)
// const fibPow = fib.map(pow)
// const fibFilter = fibPow.filter(el => {
//     return el > 24
// })
// console.log(fibFilter);
                                    // const people =[
                                    //     {name: 'Oleg', budget: 1000},
                                    //     {name: 'Alex', budget: 1500},
                                    //     {name: 'Igor', budget: 1800}
                                    // ]
                                    //
                                    // const allBudget = people
                                    //     .filter(person => person.budget > 1200)
                                    //     .reduce((acc, person) => {
                                    //     acc += person.budget
                                    //     return acc
                                    // }, 0)
                                    //
                                    // console.log(allBudget);

// //Задача 1
// const str = 'привет, мы изучвем JavaScript'
// const reverseText = str.split('').reverse().join('')
// console.log(reverseText);





// //Object
// const person = {
//     name: 'Oleg',
//     age:29,
//     isProgrammer: true,
//     language: ['ru', 'en', 'de'],
//     'complex key': 'Complex Value',
//     ['key_' +(1+3)]: 'Computed Key',
//     greet() {
//         console.log('greet from person')
//     },
//     info() {
//         console.log('Информация про человека по имени:', this.name )
//     }
// }


// console.log(person.name);
// console.log(person['complex key']);
// person.greet()
// // person.age++
// person.language.push('by')
// person['key_4'] = undefined
// console.log(person);
//
// // const name = person.name
// // const age = person.age
// // const language: = person.language
//
// const {name, age:vozrast = 20, language} = person
// console.log(name, vozrast, language);
//  for (let key in person) {
//      if ( person.hasOwnProperty(key)) {
//          console.log('key :', key);
//          console.log('value :', person[key]);
//      }
//  }
// const keysPerson = Object.keys(person).forEach((key) => {
//     console.log('key :', key);
//     console.log('value :', person[key]);
// })
            // const logger ={
//             //     keys(){
//             //         console.log('Object Keys:', Object.keys(this))
//             //     },
//             //     keysAndValues(){
//             //          Object.keys(this).forEach((key) =>{
//             //             console.log(`"${key}" : ${this[key]}`);
//             //         })
//             //         // const self = this вариант сохранить this
//             //         // Object.keys(this).forEach(function(key) {
//             //         //     console.log(`"${key}" : ${this[key]}`);
//             //         // }.bind(this))  вариант #2 сохранить this
//             //     },
//             //     withParams(top = false, between = false, bottom = false){
//             //         if (top){
//             //             console.log('-------Start---------')
//             //         }
//             //         Object.keys(this).forEach((key, index, array) =>{
//             //             console.log(`"${key}" : ${this[key]}`);
//             //             if(between && index !== array.length -1){
//             //
//             //                 console.log('-------------')
//             //             }
//             //         })
//             //         if (bottom) {
//             //             console.log('-----End-------')
//             //         }
//             //     }
//             // }
//             //
//             // // const bound = logger.keys.bind(person)
//             // // bound()
//             // // logger.keys.call(person)
//             // // logger.keysAndValues.call(person)
//             // logger.withParams.call(person, true, true, true)
//             // logger.withParams.apply(person, [true, true, true])

//Event Loop
// const timeout = setTimeout(() => {
//     console.log('after timeout')
// }, 2500)
// clearTimeout(timeout)
//
// const interval = setInterval(() => {
//     console.log('after interval')
// }, 1000)
// clearInterval(interval)
//
// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
//
// delay(() => {
//     console.log('after 2 second')
// }, 2000)

// const delay = (wait = 1000) => {
//     const promise = new Promise ((resolve, reject) => {
//         setTimeout(()=>{
//             reject()
//         }, wait)
//     })
//     return promise
//
// }
// delay(2500)
//     .then(() => {
//         console.log('after 2 second')
//     })
//     .catch((err) => console.error('Error', err))
//     .finally(() => console.log('Finally'))

// const getData = () => new Promise(resolve => resolve([
//     1,1,2,3,5,8,13
// ]))
// // getData().then(data => console.log(data))
//
//
// async function async() {
//     try{
//         await delay(3000)
//         const data =  await getData()
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
//
// }
// async()

                    // //work DOM
                    // const descr = document.getElementById('hello');
                    // const subdescr = document.querySelector('.subdescr')
                    // // const subdescr2 = subdescr.nextElementSibling
                    // const h2list = document.querySelectorAll('h2')
                    // const subdescr2 = h2list[h2list.length -1]
                    //
                    // console.log(subdescr2)
                    // function addStyle (node, text, background = '#eee', fontSize) {
                    //     node.textContent = text
                    //     node.style.color = 'purple'
                    //     node.style.textAlign = 'center'
                    //     node.style.background = background
                    //     node.style.padding = '10px 5px'
                    //     node.style.display = 'block'
                    //     if (fontSize) {
                    //         node.style.fontSize = fontSize
                    //     }
                    // }
                    //
                    // setTimeout(() => {
                    //     addStyle(descr, 'I changed for JavaScript')
                    // },1500)
                    // const link = subdescr2.querySelector('a')
                    // link.addEventListener('click', (event) => {
                    //     event.preventDefault();
                    //     console.log('click oj link')
                    //     const url = event.target.getAttribute('href')
                    //     window.location = url
                    // })
                    //
                    // setTimeout(() => {
                    //     addStyle(subdescr, 'Still changing for JavaScript', 'gray', '25px')
                    // },2500)
                    //
                    // setTimeout(() => {
                    //     addStyle(link, 'And now not, though', '#777' , '24px')
                    // },3500)
                    //
                    // descr.onclick = () => {
                    //     if (descr.style.color === 'purple'){
                    //         descr.style.color = 'blue'
                    //         descr.style.background = '#000'
                    //     } else {
                    //         descr.style.color = 'purple'
                    //         descr.style.background = '#eee'
                    //     }
                    // }
                    //
                    //
                    // link.addEventListener('click', ()=> {
                    //     if (subdescr2.style.color === 'purple'){
                    //         subdescr2.style.color = 'blue'
                    //         subdescr2.style.background = '#000'
                    //     } else {
                    //         subdescr2.style.color = 'purple'
                    //         subdescr2.style.background = '#eee'
                    //     }
                    // })
                    // // console.dir(subdescr)

