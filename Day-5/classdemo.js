class Employee{
    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }
    getemployeeDetails(){
        return `Employee Details are ${this.name} ${this.tech} ${this.location} ${this.email}`
    }
    setempEmail(email){
        this.email=email;
    }
}
