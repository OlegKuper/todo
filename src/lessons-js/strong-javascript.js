// const person = {
//     name: "Oleg",
//     age: 29,
//     greet:() => {
//         console.log('Greet!')
//     }
// }
//
// person.greet()
//
// Object.prototype.sayHello = () => {
//     console.log('Hello')
// }

// function hello() {
//     console.log('Hello', this)
// }

// const person = {
//     name: "Oleg",
//     age: 29,
//     sayHello: hello,
//     // sayHelloWindow: hello.bind(window),
//
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//     }
// }
// person.sayHelloWindow()
// person.logInfo()

// const lena = {
//     name: 'Lena',
//     age: 23
// }

// person.logInfo.bind(lena, 'frontend', '8-999-123-12-23')()
// person.logInfo.call(lena, 'frontend', '8-999-123-12-23')  //вызывает сразу функцию
// person.logInfo.apply(lena, ['frontend', '8-999-123-12-23']) // вызывает сразу функцию


// const array = [1,2,3,4,5];
// const fib = [1,1,2,3,5,8,13]
// // function multBy(arr, n) {
// //     return arr.map(function (i) {
// //         return i * n
// //     })
// // }
//
// // console.log(multBy(array, 5));
//
// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
// }
// // console.log(fib.multBy(2));
//
//
// function createIncrementor(b) {
//     return function (a) {
//         return a + b
//     }
// }
// const calc = createIncrementor(5)
// console.log(calc(15));
//
//
// function urlGenerator(domein) {
//     return function (url) {
//         return `https://${url}.${domein}`
//     }
// }
// const url = urlGenerator('com')
// console.log(url('google'));
//
//
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
//
// const person1 = {name: 'Micha', age: 22, job: 'Frontend'};
// const person2 = {name: 'Elena', age: 19, job: 'SMM'};
//
// // function createCreep(arr) {
// //     return function (log) {
// //         return log.bind(arr)
// //     }
// // }
// //
// // const bind = createCreep(person1)
// // console.log(bind(logPerson))
// // bind(logPerson)
// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args)
//     }
// }
//
// bind(person1, logPerson)()
// bind(person2, logPerson)()

/////////Promise
// console.log('Request data...')

// setTimeout(()=>{
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working',
//     }
//     setTimeout(()=>{
//         backendData.modifaited = true
//         console.log('Data received', backendData)
//     },2000)
// }, 2000)

                //
                // const p = new Promise((resolve, reject)=>{
                //     setTimeout(()=>{
                //         console.log('Preparing data...')
                //
                //         const backendData = {
                //             server: 'aws',
                //             port: 2000,
                //             status: 'working',
                //         }
                //         resolve(backendData)
                //     },2000)
                // })
                //
                //
                // p.then( data => {
                //     return  new Promise ((resolve, reject) => {
                //         setTimeout(()=>{
                //             data.modifaited = true;
                //             // console.log('Data received', data)
                //             resolve(data)
                //
                //         }, 2000)
                //     })
                // }).then(clientData =>{
                //     console.log('Data received', clientData);
                // })
                //     .catch(err => console.error('error', err))
                //     .finally(()=>{
                //         console.log('finally')
                //     })
                //

// const sleep = ms => {
//     return new Promise(resolve => {
//     setTimeout(()=> resolve(), ms)
//     })
// };
// //
// // sleep(2000).then(()=> console.log('after 2 sec'))
// // sleep(3000).then(()=> console.log('after 3 sec'))
//
// Promise.all([sleep(2000), sleep[5000]])
//     .then(()=>{
//         console.log('All promise')
//     })
//
// Promise.race([sleep(2000), sleep[5000]])
//     .then(()=>{
//         console.log('race promise')
//     })

//object
                    // const person = Object.create(
                    //     {
                    //         calculateAge() {
                    //             console.log('Age', new Date().getFullYear() - this.birthYear)
                    //         }
                    //     },
                    //     {
                    //     name: {
                    //         value: 'Oleg',
                    //         enumerable: true,
                    //         writable: true,
                    //         configurable: true,
                    //     },
                    //     birthYear:{
                    //         value: 1991,
                    //         enumerable: true,
                    //         writable: false,
                    //         configurable: false,
                    //     },
                    //     age:{
                    //         get() {
                    //             return new Date().getFullYear() - this.birthYear
                    //         },
                    //         set(v) {
                    //             document.body.style.background = 'red'
                    //             console.log('set age', v)
                    //         }
                    //     }
                    // })
                    // console.log(person.age);
                    // // person.name = 'Maxim'
                    //
                    // for (let key in person){
                    //     if (person.hasOwnProperty(key)) {  //обязательная проверка при использовании цикла for in
                    //
                    //         console.log('key', key, person[key])
                    //     }
                    // }


///////Class

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }

// class Animal {
//     static type = 'ANIMAL'
//     constructor(props) {
//         this.name = props.name
//         this.age = props.age
//         this.hasTail = props.hasTail
//     }
//     voice(){
//         console.log('i am animal')
//     }
// }
//
// const animal = new Animal({
//     name:'Animal',
//     age: 5,
//     hasTail: true,
// })
//
// animal.voice()
// console.log(Animal.type);
//
// class Cat extends Animal {
//     static type = 'CAT'
//
//     constructor(props) {
//         super(props);
//         this.color = props.color
//     }
//     voice(){
//         console.log('i am cat')
//     }
//
//     get ageInfo() {
//         return this.age * 4
//     }
//
//     set ageInfo(newAge) {
//         this.age = newAge
//     }
//
// }
//
// const cat = new Cat ({
//     name:'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//
//     hide(){
//         this.$el.style.display = 'none'
//     }
//     show() {
//         this.$el.style.display = 'block'
//     }
// }
//
// class Box extends Component{
//     constructor(props) {
//         super(props.selector);
//         this.$el.style.width = this.$el.style.height = props.size + 'px';
//         this.$el.style.background = props.background
//
//     }
//
// }
//
// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     background: 'red'
// })
//
// class Circle extends Box {
//     constructor(props) {
//         super(props);
//         this.$el.style.borderRadius = props.radius + '%'
//
//     }
//
// }
// //
// const circle1 = new Circle({
//     selector: '#box2',
//     size: 100,
//     background: 'blue',
//     radius: 50
// })



// const delay = ms =>{
//     return new Promise(r=> setTimeout(()=> r(), ms))
// }
//
// // delay(2000).then(()=> console.log('2sec'))
//
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
//
// // function fetchTodos() {
// //     console.log('Fetch todo started...')
// //     return delay(2000)
// //         .then(() => fetch(url))
// //         .then(response => response.json())
// // }
// //
// // fetchTodos()
// //     .then(data => {
// //         console.log('Data:', data)
// //     })
// //     .catch(err => console.error('Error', err))
//
// async function fetchAsyncTodos() {
//     console.log('Fetch todo started...')
//     try {
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } catch (e) {
//         console.error('Error', e)
//     } finally {
//         console.log('Ok')
//     }
//
// }
//
// fetchAsyncTodos()


//////Proxy
//Object
// const person = {
//     name: "oleg",
//     age: 26,
//     job: 'full Stack',
//
// }
//
// const op = new Proxy(person, {
//     get(target, p, receiver) {
//         console.log(`Getting prop ${p}`)
//         if (!(p in target)) {
//             return p
//             .split('_')
//             .map(p => target[p])
//             .join(' ')
//         }
//
//         return target[p]
//     },
//     set(target, p, value, receiver) {
//         if (p in target) {
//             target[p] = value
//         } else {
//             throw new Error(`No ${p} field in target`)
//         }
//     },
//     has(target, p) {
//         return ['age', 'name','job'].includes(p)
//     },
//     deleteProperty(target, p) {
//         console.log('Delete ', p)
//         delete target[p]
//          return true
//     }
// })
//
// //function
//
// const log = text => `Log: ${text}`
//
// const fp = new Proxy(log, {
//     apply(target, thisArg, argArray) {
//         console.log('Calling fn... ')
//         return target.apply(thisArg, argArray).toLowerCase()
//     }
// })
//
//
// // Classes
//
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
//
// const PersonProxy = new Proxy(Person, {
//     construct(target, argArray, newTarget) {
//         console.log('Construct...')
//         return new Proxy (new target(...argArray), {
//             get(t, p) {
//                 console.log(`Geting  prop ${p}`)
//                 return t[p]
//             }
//         })
//     }
// })
//
// const p = new PersonProxy('Maxim', 30)


                                        // //wrapper
                                        //
                                        // const withDefaultValue = (target, defaultValue = 0) => {
                                        //     return new Proxy(target, {
                                        //         get:(obj, p,)  => (p in obj ? obj[p] : defaultValue)
                                        //     })
                                        // }
                                        //
                                        // const position = withDefaultValue({
                                        //     x: 24,
                                        //     y: 42,
                                        // }, 0)
                                        //
                                        // console.log(position)
                                        //
                                        // //hidden properies
                                        //
                                        // const withHiddenProps = (target, prefix = '_') => {
                                        //     return new Proxy(target, {
                                        //         has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
                                        //         ownKeys: obj => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
                                        //         get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0//undefined
                                        //     })
                                        // }
                                        //
                                        //
                                        // const data = withDefaultValue({
                                        //     name: 'Oleg',
                                        //     age: 29,
                                        //     _uid: '123214'
                                        // })
                                        //
                                        // //Optimization
                                        //
                                        //
                                        //
                                        // const IndexedArray = new Proxy(Array, {
                                        //     construct(target, [args]) {
                                        //         const index = {}
                                        //         args.forEach(item => (index[item.id] = item ))
                                        //
                                        //         return new Proxy( new target(...args), {
                                        //             get(arr, p) {
                                        //                 switch (p) {
                                        //                     case 'push':
                                        //                         return item => {
                                        //                             index[item.id] = item
                                        //                             arr[p].call(arr, item)
                                        //                         }
                                        //                     case 'findById': return id => index[id]
                                        //                     default: return  arr[p]
                                        //                 }
                                        //             }
                                        //         })
                                        //     }
                                        // })
                                        //
                                        // const users = new IndexedArray([
                                        //     {id: 1, name: 'Vladilen', job: 'fullstack', age: 25 },
                                        //     {id: 2, name: 'Elena', job: 'student', age: 22 },
                                        //     {id: 3, name: 'Victor', job: 'Backend', age: 24 },
                                        //     {id: 4, name: 'Marina', job: 'Teacher', age: 25 },
                                        // ])

// //Generator
//
// function* strGen() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }
//
// console.log(strGen());
//
// function* numberGen(n =10) {
//     for ( let i = 0; i < n; i++ ){
//         yield i
//     }
// }
//
// const num = numberGen(7)
//
// const iterator = {
//     gen(n=10){
//         let i = 0
//
//         return{
//             next(){
//                 if (i < n, i++) {
//                     return  {value: ++i, done:false}
//                 }
//                 return { value: undefined, done: true}
//             }
//         }
//     }
// }
//
// for(let k of 'Hello'){
//     console.log(k)
// }


//Method arr

// const people =[
//     { name: 'Vladilen', budget: '40000', age: 25 },
//     { name: 'Elena', budget: '3500', age: 22 },
//     { name: 'Victor', budget: '50000', age: 17 },
//     { name: 'Marina', budget: '20000', age: 25 },
//     { name: 'Misha', budget: '15000', age: 25 },
//     { name: 'Kate', budget: '17000', age: 15 },
//     { name: 'Oleg', budget: '60000', age: 27 },
//     { name: 'Alex', budget: '22000', age: 26 },
//     { name: 'Volod9', budget: '22500', age: 12 },
// ]

                    // for (let i = 0; i < people.length; i++){
                    //     // console.log(people[i])
                    // }
                    //
                    // for(let i of people){
                    //     console.log(i)
                    // }


                    // //forEach
                    // people.forEach( person => console.log(person))
                    //
                    //
                    // //map
                    //
                    // const newPeople = people.map(person => `${person.name} (${person.age}) this budget ${person.budget}`)
                    // console.log(newPeople)
                    //
                    // //filter
                    //
                    // const newFolter = people.filter((person) => {
                    //     if (person.age >= 18){
                    //         return true
                    //     }
                    // })
                    // console.log(newFolter)

                    // //reduce
                    //
                    // const amount = people.reduce((total, person)=> total + +person.budget, 0)
                    // console.log(amount)
                    //find
//                     //
//                     // const volod = people.find((person) => person.name === 'Volod9')
//                     // console.log(volod)
//                     //
//                     //
//                     // //findIndex
//                     // const volodIndex = people.findIndex((person) => person.name === 'Volod9')
//                     // console.log(volodIndex)



// const newPeople = people
//     .filter((person) => person.budget <= 20000 )
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             budget: person.budget
//         }
//     })
//     .reduce((total, person) => total + +person.budget, 0)
//
//
// console.log(newPeople);



//    Map


// const  obj = {
//     name: 'Oleg',
//     age: 29,
//     job: 'Frond-end',
// }
//
// const entries = [
//     ['name', 'Oleg'],
//     ['age', 29],
//     ['job', 'Frond-end'],
// ]
//
// // console.log(Object.entries(obj))
// // console.log(Object.fromEntries(entries))
//
// const map = new Map(entries)
// map
//     .set('newField', 42)
//     .set(obj, 'value of obj')
//     .set(NaN, 'NaN ??')

// map.delete('job')
//
// console.log(map)
// console.log(map.has('job'));
// console.log(map.size)
// map.clear()
// console.log(map.size)

//=======

// for (let [key, value] of map.entries()) {
//     console.log(key, value)
// }
//
//
// for (let key of map.keys()) {
//     console.log(key)
// }
//
// map.forEach((val, key, m) => {
//     console.log(val, key)
// })

//========
// const array = Array.from(map)
// const mapObj = Object.fromEntries(map)
// console.log(mapObj)

//========

// const users = [
//     {name: 'Elena'},
//     {name: 'Alex'},
//     {name: 'Irina'},
// ]
//
// const visits = new Map()
//
// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 5000000))
//     .set(users[2], new Date(new Date().getTime() + 2000 * 60))
//
// function lastVisit(user) {
//     return  visits.get(user)
// }
//
// console.log(lastVisit(users[1]))


// Set

// const set = new Set([1,2,3,3,4,4,5,5,6])
//
// set.add(10).add(20).add(20)

// console.log(set)
// console.log(set.has(30))
// console.log(set.size)
// console.log(set.delete(3))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

// console.log(set.values())
// console.log(set.keys())

// for (let key of set) {
//     console.log(key)
// }

// function uniqValues(array) {
//     return [...new Set(array)]
// }
//
// console.log(uniqValues([1,2,3,4,4,4,4,4,5,6,7.7]))



//      weakMap

// let obj = {name: 'weakmap'}
//
// obj.name = 'noWeakMap'
//
// console.log(obj)


// const map = new WeakMap([
//     [obj], 'obj data'
// ])
//
// obj = null
// //get set delete has
// console.log(map.get(obj))
//========
            // const cache = new WeakMap();
            // function cacheUser(user) {
            //     if (!cache.has(user)) {
            //         cache.set(user, Date.now())
            //     }
            //     return cache.get(user)
            // }
            //
            // let lena = {name: 'Elena'}
            // let alex = {name: 'Alex'}
            // cacheUser(lena)
            // cacheUser(alex)
            //
            // lena = null
            //
            // console.log(cache.has(lena))
            // console.log(cache.has(alex))

//  WeakSet
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'},
]

const visits = new WeakMap();

visits.add(users[0]).add(users[1]);

users.splice(1,1)
console.log(visits.has(users[0]))
console.log(visits.has(users[1]))