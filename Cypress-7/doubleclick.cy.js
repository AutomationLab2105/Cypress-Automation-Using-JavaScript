describe('Double Click in  IFrames',()=>{
    it('Double Click',()=>{
        cy.visit("https://api.jquery.com/dblclick/")
        cy.frameLoaded("iframe")
        cy.iframe().contains("Double click the block").siblings().eq(0).dblclick()
        .should("have.class","dbl")
    })
})