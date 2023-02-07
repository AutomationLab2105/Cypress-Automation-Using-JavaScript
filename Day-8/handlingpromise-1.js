let f1=function(){
    return "I'm in f1()"
}

let f2=function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I'm in f2()")
        },5000)
    })
}

let f3=function(){
    return "I'm in f3()"
}

let callAllFunctions=async function(){
    let r1=f1()
    console.log(r1)
    let r2=await f2()
    console.log(r2)
    let r3=f3()
    console.log(r3)
}
callAllFunctions()