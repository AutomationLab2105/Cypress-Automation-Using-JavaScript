let arr1=[1,2,3]
console.log(arr1)
console.log(arr1.length);
console.log(arr1[1]);
console.log(arr1[100]); //if we give index is more than array size than it will give output as undifined
console.log(arr1.push(100)); // it returns length of an array
console.log(arr1);
console.log(arr1.unshift(100));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);

arr1[2]=200
console.log(arr1);

arr1[3]=400
console.log(arr1);