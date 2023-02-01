let arr_1=[1,2,3,"cypress",10.5,true]
//console.log(arr_1);

let object_1={
    course:"Cypress",
    Type:"Automation"
}

arr_1.push(object_1)
let object_2={
    course:"Selenium",
    Type:"Automation"
}
arr_1.unshift(object_2);
console.log(arr_1);