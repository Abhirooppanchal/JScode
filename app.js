// const myName = "Abhiroop"
// const age = 20
// const greet = `My name is ${myName}.
// My age is ${age}.`
// console.log(greet)
// //console.log(y)

// const username = "abhiroop"
// if(username){               //false values = '', "", false, undefined, null, 0
//     console.log("You are adult")
// }else{
//     console.log("you aren't")
// }

// const token = "nasfksdkfnsd"
// const user = token ? true : false       //ternary operator
// console.log(user)

// //1. short circuiting: instead of repeating name twice we'll do short circuiting by using OR operator.
// const nam = "nsdkan"
// //const usrnm = name ? name : "user"   instead of this LOC we can use below
// const usrnm = nam || "user"
// console.log(usrnm)
// //2.
// const emailVerified = true
// const nme = ""
// const otpt = emailVerified && nme
// console.log(otpt)

// //Object
// const frnd = "xyz"
// const person = {
//     nm:"abhiroop",
//     axge:20,
//     frnd,           //whenever key and value both are same then we dont need to write twice, like frnd:frnd.
//     details:{
//         status:"coder",
//         task:"coding"
//     }
// }

// console.log(person.nm)
// console.log(person["nm"])
// console.log(person.axge)
// console.log(person.details.status)

// const {nm:myname,axge:myage,details:{status}} = person        //This is known as object destructuring,
// //here we do not need to write person again and again in L47, L48.
// //using 'colon' after the destructure we can rename the variable.
// const {task} = person.details       //Both are correct way to destructure object.

// console.log(`I am ${myname}`)
// console.log(`I am ${myage} years old.`)
// console.log(`I am a ${status}`)
// console.log(`I do ${task}`)
// console.log(person.frnd)

// //function
// const sumOfTwo = function(){
//     const x = 3
//     const y = 4
//     console.log(x+y)
// }
// sumOfTwo()  //After assigning a function into a variable we cannot call function before its initialization.
// //The most popular way of defining a function is arrow funtion.

// const sum2 = ()=>{
//     const m = 5
//     const n = 3
//     console.log("Sum of both number is",m+n)
// }
// sum2()
// //when we are making a function with single LOC then we do not need to give its body.
// const greet = (name,age)=>`Hello ${name} age = ${age}`	//this line means that the function is returning
// //line which is after the arrow, we dont even need to write return keyword.
// console.log(greet("abhi",20))

// //if we pass the object through the function, then we need to destructure it in the function,
// const fun = (person)=>{
//     const {name,age} = person			//destructuring
// 						//instead of sestructuring here we can also destructure it in the function declaration
// 						//for eg : const fun = ({name,age})=>{}		so here it reduce a line.
//     return `hello ${name}, age = ${age}`
// }
// console.log(fun({name:"abhiroop", age:20}))	//passing object as an argument.
// 						//we can also pass another arguments along with the object.
// //if we are returning an object from the function
// const fun = ({name, age},status)=> ({result:`hello ${name}, age = ${age}, status = ${status}`})
// 						//if the LOC in the function is only single which is return
// 						//paranthesis is used to show that we are returning an object, otherwise JS consider it as body of the function.
// console.log(fun({name:"abhiroop", age:20},"coder"))

// //Arrays, Objects etc are reference type Datatype in JS
// const object1  = {
//     name:"abhiroop",
//     age:20,
//     status:"coder"
// }
// const object2 = object1
// object1.name = "abhi"
// console.log(object2)
// //in above when we create object1 then in memory it creates an object which is pointing it by the reference variable object1, then again assigning object1 in object2 will point the 
// //same memory location with another reference variable.
// //It only happens with reference datatype.
// const arr = [10,20,30]
// const arr2 = arr
// arr.push(40)
// console.log(arr2)
// //Instead of assigning values directly we'll use Spread Operator which is denoted by (...) like,
// const object1  = {
//     name:"abhiroop",
//     age:20,
//     status:"coder"
// }
// const object2 = {
//     ...object1
// }
// object1.name = "abhi"
// console.log(object2)
// //In above code, ...object1 is used to unpack the values from the object and after unpacking, it is assigned to another object i.e. object2, Now the values are assigneed, not pointing 
// //the same memory location like before, so changing in one will not reflect in another. 

// //In below code, we are copying the data from user into cart and change the value of  item in cart and unchanged in user object.
// const user  = {
//     id:1,
//     username:"abhiroop",
//     password:"abcde",
//     item:"book"
// }
// const cart = {
//     ...user,
//     item:"shoes"
// }
// console.log(cart)
// //after copying we can add another key-values into our object.

// //Arrays
// const n1 = [10,20,30,40]
// const n2 = [50,60,70,80]
// const n3 = [...n1,...n2,90,100]	//merging above two arrays and add additional values in it.
// console.table(n3)		//it is used to print array in table form.

// //Array Destructure
// const n1 = [10,20,30,40]
// const [a,b,c,d] = n1		//it is called destructuring, pulling out values and assigning it to some variable.
// console.table(a,b,c,d)

// //For loop:it is traditional way, JS has much better way than this
// const fruits = ['mango','apple','banana']
// for(let i=0;i<fruits.length;i++){
//      console.log(fruits[i])
// }
 
// //using forEach method
// const fruits = ['mango','apple','banana']
// fruits.forEach((elements)=>{
//     console.table(elements)
// })

// //now lets create array of object
// const arr = [
//     {name:'ramesh',salary:1000},
//     {name:'mukesh',salary:2000},
//     {name:'hitesh',salary:2300}
// ]
// console.log("salary of employees before:")
// arr.forEach(item=>{
//     //const {name,salary} = employee
//     console.log(item.salary)
// })
// console.log("salary of employees after increment")
// salaryAI = []
// arr.forEach(item=>{
//     item.salary += 1000
//     salaryAfterIncrement.push(item)
// })
// console.table(salaryAfterIncrement)
// //in case of new array like above , to push items, we'll use map which automatically push items in it.
//we do not need to predefine the array.
// const salaryAI = arr.map(item=>{
//     item.salary+=1000
//     return item
// })
// console.table(salaryAI)
// //The feature of map is that it return an array as well as iterate. It is used everywhere in react.

//Now we'll use filter method which is used to filter out elements from an array.
//it also return an array as well as iterate.
// const ToDos = [
//     {id:1,task:"eat"},
//     {id:2,task:"sleep"},
//     {id:3,task:"code"},
//     {id:4,task:"game"}
// ]
// const NewToDo = ToDos.filter(item=>{
//     return item.id%4!=0
// })
// console.log(NewToDo)


// //filter using function
// const removeToDo=(id)=>{
//     const newToDO=ToDos.filter(items=>items.id<id)
//     console.table(newToDO)
// }
// const ToDos = [
//         {id:1,task:"eat"},
//         {id:2,task:"sleep"},
//         {id:3,task:"code"},
//         {id:4,task:"game"}
// ]
// removeToDo(4)

//Another example for filter, here the user is filtered out as per the condition.
// const users =[
//     {name:'ram',sal:2000},
//     {name:'sam',sal:3000},
//     {name:'ham',sal:4000},
// ]
// const ft = users.filter(items=>{
//     return items.sal>=3000
// })
// console.table(ft)

//for network request, we'll use fetch which makes a promise to be resolved or be rejected,(it return a promise) so we'll use .then
//then takes function as an argument, take a look on the code.
// fetch('https://jsonplaceholder.typicode.com/posts')         //in this line we make a network request and it return a promise.
// .then(res=>{                                                //return promise is handled by then
//     //console.log(res)        //by doing this only then we do not get any meaningful data, we need to parse it in json.
//     res.json().then(result=>{console.table(result)})        //json method also takes function as an argument and return a promise so to handle it we'll use .then
// })                                                          //above code is bit strange so we'll modify it

// //modifications of above code is 
// function fetchPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>res.json())
//     .then(result=>console.table(result))    //rejected in case of slow/no internet connection
//     .catch(error=>{console.log(error)})     //in case of promise got rejected, it is handled by catch block.
// }

//here we can also use async await, code is:
//async function fetcPost(){            //can also be written as.
// const fetchPost = async () => {         //whenever we use await in any function then we need to declare the function async.
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')       //using await is much more cleaner than then&catch.
//         const result = await res.json()     //dont forget to use parenthesis with json
//         console.table(result)
//     }catch(error){
//         console.log(error)
//     }
    
// }

// //Styling console.
// console.log("%cMy name is Abhiroop %c Panchal",'color:yellow','background:red;font-size:18px')
// //we can also create our own printing function like:

const Print = (text)=>{console.log(`%c ${text}`,'background:red;font-size:15px')}
// //now console.log is simply replaced by Print function.
Print("My name is Abhiroop Panchal")

class Bike{
    constructor(color,topspeed,engineCC){
        this.color = color
        this.topspeed = topspeed
        this.engineCC = engineCC
    }
    intro(){
        Print(`Bike color is ${this.color},
        Topspeed is ${this.topspeed},
        Engine is ${this.engineCC} cc.`)
    }
}
class Car extends Bike{
    constructor(color,topspeed,engineCC,airbags,capacity){
        super(color,topspeed,engineCC)
        this.airbags = airbags
        this.capacity = capacity
    }
    intro(){
        Print(`Car color is ${this.color},
        Topspeed is ${this.topspeed},
        Engine is ${this.engineCC} cc
        It has ${this.airbags} airbags,
        It is ${this.capacity} Seater.`)
    }
}

const mt15 =  new Bike("black",110,155)
const creta = new Car("black",150,1500,5,5)
mt15.intro()
creta.intro()