//assigning default values if values are not passing in the function then it will take default values

function add(x1=0,x2=0,x3=0){
    let result=x1+x2+x3;
    return result;
}
console.log(add(1,2)) // --> 3
console.log(add()); // --> 0


