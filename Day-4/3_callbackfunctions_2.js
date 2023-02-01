function show(value) {
    console.log("Result is ",value);
}
//show();

function sum(a,b,c,callbackFunctions){
    let result=a+b+c;
    //console.log(result);
    callbackFunctions(result);
}
sum(1,2,3,show)