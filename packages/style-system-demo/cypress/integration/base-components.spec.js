context('Base components', function () {
    it('Box', function () {
        cy.viewport(1200, 1200);
        cy.visit('/base-components/box');
        expect(true).to.equal(true);
    });
    it('Flex', function () {
        cy.viewport(1200, 1200);
        cy.visit('/base-components/flex');
        expect(true).to.equal(true);
    });
});
