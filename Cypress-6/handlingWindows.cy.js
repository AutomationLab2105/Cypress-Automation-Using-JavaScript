describe("Handle Tabs in Cypress",()=>{
    it("Switch Tab in Cypress",()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.login("ineuron@ineuron.ai","ineuron")
        cy.contains("Manage").realHover()
        cy.wait(3000)
        cy.contains("Manage Categories").invoke("removeAttr","target").click({force:true})
        cy.window().then(function(win){
            cy.contains("Add New Category").click({force:true});
            cy.stub(win,"prompt").returns("Data Structures")
        })
        cy.contains("Data Structures").should("be.visible")
    })
})