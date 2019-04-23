export var clickEl = function (navPath) {
    cy.get("[data-test=\"" + navPath + "\"]").click();
};
export var assertStyle = function (el, cssProp, cssValue) {
    cy.get("[data-test=\"" + el + "\"]").should('have.css', cssProp, cssValue);
};
export var assertInnerText = function (el, value) {
    cy.get("[data-test=\"" + el + "\"]").contains(value);
};
export var assertMargin = function (el, top, right, bottom, left) {
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'margin-top', top + "px");
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'margin-right', right + "px");
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'margin-bottom', bottom + "px");
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'margin-left', left + "px");
};
export var assertPadding = function (el, top, right, bottom, left) {
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'padding-top', top + "px");
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'padding-right', right + "px");
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'padding-bottom', bottom + "px");
    cy.get("[data-test=\"" + el + "\"]").should('have.css', 'padding-left', left + "px");
};
export var assertAlert = function (el, expectedMessage) {
    var stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get("[data-test=\"" + el + "\"]").click().then(function () {
        expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
    });
    clickEl(el);
};
//# sourceMappingURL=utils.js.map