let fun1=function hello(){
    console.log("Hello Cypress");
}
fun1()

//anonymous
let fun2=function () {
    console.log("Hello Cypress anonymous");
}
fun2()

let fun3=() => {
    console.log("Hello Cypress With arrow functions");
}
fun3()


//accepted for only single line
let fun4=() => console.log("Hello Cypress with single line");
fun4()