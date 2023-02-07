let wm1=new WeakMap();
console.log(wm1);
//wm1.set("name","JS"); -- TypeError: Invalid value used as weak map key
console.log(wm1)

let ob1={
    name:"Java"
}

let ob2={
    name:"JavaScript"
}

wm1.set(ob1,"Object1")
wm1.set(ob2,"Object2")

console.log(wm1.get(ob1))