try{
    let fname="Cypress";
    console.log(fname.toUpperCase());
}
catch(err){
    console.log("Please give String values");
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log("Its Done")
}