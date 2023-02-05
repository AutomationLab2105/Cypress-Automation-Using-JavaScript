class Employee{
    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }
    getEmployeeDetails(){
        console.log(`Employee Details are ${this.name} ${this.tech} ${this.location}`)
    }
}

let emp1=new Employee("Chinna","Automation Engineer","Hyderabad");
emp1.getEmployeeDetails()