class Employee{
    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }
    get employeeDetails(){
        return `Employee Details are ${this.name} ${this.tech} ${this.location} ${this.email}`
    }
    set empEmail(email){
        this.email=email;
    }
}

let emp1=new Employee("Chinna","Automation Engineer","Hyderabad");
emp1.empEmail="chinna@gmail.com"
console.log(emp1.employeeDetails)