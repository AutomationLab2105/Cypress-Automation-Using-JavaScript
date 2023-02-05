class Employee{
    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }
    getEmployeeDetails(){
        console.log(`Employee Details are ${this.name} ${this.tech} ${this.location} ${this.email}`)
    }
    setEmpEmail(email){
        this.email=email;
    }
}
export {Employee}