function show() {
    console.log("Hello Cypress");
}
//show();

function sum(a,b,c,callbackFunctions){
    let result=a+b+c;
    console.log(result);
    callbackFunctions();
}
sum(1,2,3,show)