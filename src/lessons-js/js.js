
// //hosting
// function hosted() {
//     age = 26
// }
//
// let age;
// hosted();
// console.log(age);

// //Const
// const color = '#ffeebb'
//
// console.log(color)
//
// const array = [1,2,3,5,8];
// console.log(array)
// array.push(13)

// const obj = { a: 42};
// obj.name = 'Igor';
//
// console.log(obj);

// //ArrowFunction
// function sum( a, b) {
//     return a+b;
// }
// function cube(a) {
//     return a ** 3
// }
// console.log(sum(2, 4));
// console.log(cube(8));
//
// const res = (a, b) => {
//     return a+b;
// };
//
// console.log(res(2,2));
//
// setTimeout(() =>  console.log('After 1 second'), 1000)

//


// //default params
// const getDefault = c => c * 2
// function compute(a = 10, b = getDefault(10)) {
//     return a +b
// }
//
// console.log(compute( 1));

//Strings
// const title = 'Hello';
// const isVisible = () => Math.random() > 0.5
// const template = `
//     ${isVisible() ? `<p>ok</p>` : `<p>not</p>`}
//     <h1>${title}</h1>
//     `
// console.log(template)
//
// //Metods
// const str = 'Heloo'
//
// console.log(str.startsWith('He'))
// console.log(str.endsWith('l'))
// console.log(str.includes('l'))
// console.log(str.repeat(3))
// console.log(str.trim())
// console.log(str.trimEnd())
// console.log(str.trimStart())
// console.log(str.padStart(10, '"'))
// console.log(str.padEnd(10, '"'))
//
// // //rest
// function average(a, ...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
// }
//
// console.log(average(10, 20, 30, 40, 50))
// //spread
// const array = [1,2,3,5,8,13]
// console.log(...array, 21)
//
// console.log(Math.max(...array))
//
// const fib = [1, ...array]
// console.log(fib)

// //Destructuring
// const array = [1,undefined,3,5,8,13]
//
// const [a, b = 42, ...c] = array
// console.log(b, c)
// //Object
// const address = {
//     county: 'Ukraine',
//     city: 'Kharkiv',
//     street: 'Symska',
//     concat: function () {
//         return `${this.county} ${this.city} ${this.street}`
//     }
// }
//
// // const {county, city = 'London', concat} = address
// // console.log(address.concat())
// // console.log(concat.call(address))
//
// const {city, ...rest} = address
// // console.log(rest)
// const newAddress = {...address, street: 'Tverskaya'}
// console.log(newAddress)

// //Object
// const cityField = 'city'
// const job = 'Design'
// const person = {
//     name: 'Itina',
//     age: 26,
//     [cityField]: 'Kharkiv',
//     job,
//     'coutry-life': 'Ukraine',
//     toString() {
//         return Object.keys(this)
//             .filter(key => key !== 'toString')
//             .map(key => this[key])
//             .join('')
//     }
// }
//
// console.log(person)
//
// //Methods
// const first = {a: 1};
// const second = {b:2};
//
// // console.log(Object.is(20,10))
// const obj = Object.assign({},first, {c:2, d:4})
// console.log(obj)
// console.log(Object.entries(obj))
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

////Class
// class Person {
//     constructor(name){
//         this.name = name
//     }
//     greet(){
//         console.log(this.name + ' говорит привет')
//     }
// }
// const max = new Person("max")
// // max.greet()
// // console.log(max)
//
// class Programmer  extends Person{
//
//     constructor(name, job){
//         super(name)
//         this._job = job
//     }
//     get job(){
//         return this._job.toUpperCase()
//     }
//     set job(job) {
//         if (job.length < 2){
//             throw new Error('Error')
//         }
//         this._job = job
//     }
// }
//
// const frontend = new Programmer('Adry', 'Qa')
//
// //Static
// class Util {
//     static average(...args){
//         return  args.reduce((acc, i) => acc += i, 0)  / args.length
//     }
// }
// const res = Util.average(1,1,2,3,5,8,13);

// //Symbol
// const symbol = Symbol('demo');
// const other = Symbol('demo');
//
// console.log(symbol);
// console.log(other);
//
// // console.log(symbol === other)   = false
//
// const obj = {
//     name: 'Elena',
//     demo: 'demk',
//     [symbol]: 'meta'
// }
// console.log(obj[symbol])
//
// for (let key in obj) {
//     console.log(key)
// }

// //iterator
//
// const array = [1,2,3,4];
// const str = 'Hello';
//
// // console.log(array[Symbol.iterator])
// // console.log(str[Symbol.iterator])
//
//
// for (let item of array) {
//     console.log(item)
// }
//
// const country = {
//     values: ['ru', 'kz', 'ua', 'by'],
//     [Symbol.iterator](){
//         let i = 0
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++
//                 return{
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//     }
// };
//
// for (let item of country){
//     console.log(item)
// }

// //Generator
//
// function *gen(num = 4) {
//     for (let i=0; i < num; i++ ) {
//         yield i
//     }
// }
// const iter = gen(3)
// console.log(iter.next())
// console.log(iter.throw('Error'))
//
// for (let i of gen(4)){
//     console.log(i)
// }

// //promises
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Success')
//     }, 500)
// })
//
// const delay = (ms) => new Promise(((resolve, reject) =>{
//     setTimeout(() => resolve(`Done! ${ms}`), ms)
// }))
//
// // delay(1000)
// //     .then(data => delay(500))
// //     .then(data => console.log(data) )
// //     .catch(err => console.log(err) )
// //     .finally(() => console.log('Finally'))
//
//
// // async function asyncDelay() {
// //     const data = await delay(2000)
// //     console.log(data)
// // }
// // asyncDelay()
//
// Promise.all([
//     delay(1000),
//     delay(500),
//     delay(2000),
// ]).then(data => console.log(data))
//
// Promise.race([
//     delay(1000),
//     delay(500),
//     delay(2000),
// ]).then(data => console.log(data))

// map-set
// const map = new Map(
//     [['a', 1]]
// )
// // console.log(map.get('a'))
// map.set('b',2).set(NaN, 'Number')
// console.log(map.get(NaN))
// // map.clear()
// console.log(map.has('a'))
// map.delete('b')
// // console.log(map.delete('b'))
// console.log(map.size)
//  console.log(map.keys())
//  console.log(map.entries())
//  console.log(map.values())

// //set
// const set = new Set([1,1,2,3,5,8,13,13,13,13])
// console.log(set.size)
// console.log(set.add(21))
// // set.clear()
// set.delete(1)
// console.log(set)
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())

//proxy
const validator = {
    get(target, prop){
        return prop in target ? target[prop] : `Поля  в обьекте нет`
    },
    set(target, prop, value) {
       if ( value.length > 2 ){
           Reflect.set(target, prop, value)
       } else  {
           console.log('никуя. Сейчас ' + value.length)
       }
    }
}

const form = {
    login: 'Tester',
    password: '123',
}

// const formProxy = new Proxy(form, validator)

// console.log(formProxy)



// const proxy = new Proxy(login, {
//     apply(target,thisArg,argArray) {
//         if (argArray.length === 1){
//             Reflect.apply(target, thisArg, argArray)
//         } else {
//             console.log('nixya')
//         }
//     }
// })
// proxy('Custom message');
//
// let fruit = prompt('Какой фрукт', 'apple');
// let bag = {
//     [fruit]: 5,
// };
// alert(bag.apple);