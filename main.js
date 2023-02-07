// class Car{
//     constructor(model,make,year){
//         this.model=model,
//         this.make=make,
//         this.age=this.carAge(year),
        
//     }

//     getCarInfo(){
//         return `A ${this.model} ,made by ${this.make} at ${this.age}`
//     }
//     carAge(year){
//         return 2023-this.year;
//     }
// }
// const car1= new Car("camry", "toyota", 2010);
// console.log(car1.getCarInfo());


// -----------------------------     part tow --------------------------------------

// class Car{
//     constructor(model,make,year,min,max){
//         this.model=model,
//         this.make=make,
//         this.age=this.carAge(year),
//         this.cost=this.        
        
//     }

//     carCost(min,max){
//         return Math.random() * (max - min) + min;
//     }

//     getDescription(){
//         return `A ${this.model} ,made by ${this.make} at ${this.age} the price between ${this.max},${this.min}`
//     }
//     carAge(year){
//         return 2023-this.year;
//     }
// }
// const car1= new Car("camry", "toyota", 2021,20000,24000);
// console.log(car1.getDescription());









// ---------------------------------    part One   -----------------------------------------------------
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName=firstName,
//         this.lastName=lastName,
//         this.age=this.carAge(age),
        
//     }

//     getGreeting(){
//         return `Hi,i'm ${this.firstName} , ${this.lastName} ,and i'm ${this.age} years old.`
//     }
//     // carAge(age){
//     //     return 2023-this.age;
//     // }
// }
// const person1= new Person("mohammed", "almaslamani", 30);
// console.log(person1.getGreeting());











// Arow function   ---------------------------------------------
// const counterFunc =(counter) =>counter > 100 ? 0 :counter++;
// console.log(counterFunc(105));





// Arow method   ---------------------------------------------
//task 1
// reduce متواجدة لاختصار الارري --- تاخذ 2 باروميترز                   ????
// reduce   اخذ القيمة التراكمية                                        ????
// let nums = [2, 4, 5];
// const sum= nums.reduce((acc,cur)=>acc+cur**2,0)/nums.length
// console.log(sum);





//task 2
// the map function takes 3 parpmatars 1-array 2-elimant 3-index                    ?????
// let list=[1,2,3,4,5,6,7,8];
// let jack = list.map(e=>e*10)
// console.log(jack)






//task 3
// filter function
// to get the nambers
// let evenOnly = [1,8,6,4];
// const newEven = evenOnly.filter(e => e % 2 == 0)
// console.log(newEven);


