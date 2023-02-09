describe('Create Course - Delete Course', function() {
    
    it('Create course', function()  
    {
        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get('[name="email1"]').type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")

        cy.get('[name="password1"]').type("ineuron").should("have.value","ineuron")

        cy.get('.submit-btn').should("be.enabled").click()

        cy.contains("Manage").realHover()

        cy.wait(3000)

        cy.contains("Manage Courses").click()

        cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length","4")

        cy.contains("Add New Course").click({force:true})

        cy.get("#thumbnail").attachFile("Back1.jpeg")

        // use the same login to select instructor name and dates from calendar

        cy.xpath("//div[@role='option']/div[1]//span")
        .each(function(ele,num1,list1)
        {
            cy.log(ele.text())

            if(ele.text().includes("cypress"))
            {
                cy.wrap(ele).click({force:true})
            }

        })

    });


});