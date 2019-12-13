export var getEl = function (el) {
    return cy.get("[data-testid=\"" + el + "\"]");
};
export var clickEl = function (navPath) {
    return getEl(navPath).click();
};
export var assertStyle = function (el, cssProp, cssValue) {
    getEl(el).should('have.css', cssProp, cssValue);
};
export var assertInnerText = function (el, value) {
    getEl(el).contains(value);
};
export var assertMargin = function (el, top, right, bottom, left) {
    getEl(el).should('have.css', 'margin-top', top + "px");
    getEl(el).should('have.css', 'margin-right', right + "px");
    getEl(el).should('have.css', 'margin-bottom', bottom + "px");
    getEl(el).should('have.css', 'margin-left', left + "px");
};
export var assertPadding = function (el, top, right, bottom, left) {
    getEl(el).should('have.css', 'padding-top', top + "px");
    getEl(el).should('have.css', 'padding-right', right + "px");
    getEl(el).should('have.css', 'padding-bottom', bottom + "px");
    getEl(el).should('have.css', 'padding-left', left + "px");
};
export var assertHeight = function (el, height) {
    getEl(el).should('have.css', 'height', height + "px");
};
export var assertAlert = function (el, expectedMessage) {
    var stub = cy.stub();
    cy.on('window:alert', stub);
    clickEl(el).then(function () {
        expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
    });
    clickEl(el);
};
//# sourceMappingURL=utils.js.map