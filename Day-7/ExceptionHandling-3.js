function checkmarks(n){
    if(n<0){
        throw "Please Provide > 0"
    }
    return n;
}

console.log(checkmarks(10));