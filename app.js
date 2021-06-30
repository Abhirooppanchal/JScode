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
//     console.log(fruits[i])
// }

