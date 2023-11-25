// console.log('app.js is connected!!')


// variables
// data types
// arrays and objects


// variables

// program => console  apple
// keywords => var, let and const


// let email = 'yash@gmail.com';
// email = 'ashish@gmail.com'
// console.log(email)

// data types => string, number, boolean, arrays and objects
// string => anything iside "" ''

// let userName = "yash"
// console.log(typeof userName);

// let age = 45;
// console.log(typeof age)

// let isActive = "false";
// console.log(typeof isActive);


// [] => creating an array
let items = ['milk', 'bread', 'butter'];
// console.log(items)
// items[1] = 'brown bread';
// items.push('coffee')
// items.push('apple')
// items.pop()
// push/pop only works in the last index
// splice =>(index, deleteCount, addNewValue (optional)) delete the values

// items.splice(1, 1, 'grapes', 'apple', 'coffee')
// console.log(items)

// index => read, edit, update
// objects
// let user = ['yash', 'allahabad', 24, 8000, 'yash@gmail.com', 'male']
let fruits=['apple','banana','orange']
fruits.splice(1,1)
console.log(fruits)
fruits.push('grape')
console.log(fruits)
fruits.splice(1,1,'pear')
console.log(fruits)

let person={
    name:'john',
    age: 30,
    city:'Newyork'
}
console.log(person)
delete person.age
console.log(person)
person.job='engineer'
console.log(person)
person.city='SanFransico'
console.log(person)
 let cars =[
     {make:'totyota',model:'camry',year:2018},
     {make:'mahindra',model:'thar',year:2022},
     {make:'mini',model:'convertible',year:2023}
 ]
 console.log(cars)
 cars.push({make:'honda',model:'civic',year:2020})
 console.log(cars)
 cars[1].model='Accord'
 console.log(cars)
let user = {
    name: 'yash',
    email: 'yash@gmail.com',
    age: 24,
    stipend: 8000,
    gender: 'male',
    hobbies : ['swimming', 'reading books', 'cooking', 'sleeping']
}
// user.name = 'yash goel'
// delete user.stipend;
// user.address = 'allahabad'


// user.hobbies[1] = 'teaching'
// console.log(user.hobbies)

 let users = [
    {name: 'yash', age: 24, gender: 'male'},
    {name: 'mayank', age: 14, gender: 'male'},
    {name: 'neha', age: 32, gender: 'female'},
    {name: 'arpit', age: 21, gender: 'male'},
    {name: 'pranjali', age: 29, gender: 'female'},
    {name: 'bhavna', age: 22, gender: 'female'},
    {name: 'kunal', age: 20, gender: 'male'},
    {name: 'navneet', age: 18, gender: 'male'},
    {name: 'debashish', age:46, gender: 'male'},
 ]



 let random = Math.floor(Math.random()*users.length) 
 console.log(users[random].name)