//Reference error
try{
let num=5;
let result=cypress+1
console.log(result)
}
catch(err){
    console.log("Please check reference "+err.name +" "+err.message );
}