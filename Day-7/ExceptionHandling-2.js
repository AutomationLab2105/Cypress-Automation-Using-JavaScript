function checkmarks(n){
    if(n<0){
        throw new TypeError("Number should be > 0")
    }
    return n;
}

console.log(checkmarks(-10));