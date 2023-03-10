describe('First API Call',()=>{
    it('Get Request Via Cypress',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("a").each(link =>{
            cy.request({
                url: link.prop("href"),
                failOnStatusCode:false
            })
            .then(function(resp){
                cy.log(resp.status)
            })
        })
    })
})