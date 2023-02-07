/*
new Promise((resolve,reject)=>{
    resolve("")
    reject("")
})

new Promise(function(resolve,reject){
    resolve("")
    reject("")
})
*/

let f1=function(){
    console.log("I'm in f1()")
}

let f2=function(){
    setTimeout(function(){
        console.log("I'm in f2()")
    },5000)
}

let f3=function(){
    console.log("I'm in f3()")
}
f1()
f2()
f3()
