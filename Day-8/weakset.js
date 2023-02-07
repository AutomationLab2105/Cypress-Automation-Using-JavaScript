let ws1=new WeakSet();
console.log(ws1);
//ws1.add(10);
let ob1={
    fname:"Cypress"
}
let ob2={
    fname:"Cypress"
}
ws1.add(ob1);
ws1.add(ob2);
console.log(ws1);

// let ss1=new Set();
// console.log(ss1);