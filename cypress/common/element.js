function element(){}

element.click = function(element){
    cy.get(element).click({force:true})
}

element.textClick = function(text){
    cy.contains(text).click({force:true})
}

element.input = function(element, value){
    cy.get(element).clear().type(value).should('have.value', value)
}

element.select = function(element, value){
    cy.get(element).click()
    cy.get('mat-option > span > span').contains(value).click()
}

element.dateSelect = function(element,date){
    var dates = new Array()
    dates = date.split('-')
    cy.get(element).click()
    cy.get('.mat-calendar-period-button > .mat-button-wrapper').click()
    cy.get(`[aria-label="${dates[0]}"] > .mat-calendar-body-cell-content`).click()
    cy.get(`[aria-label="${dates[0]}-${dates[1]}-01"] > .mat-calendar-body-cell-content`).click()
    cy.get(`[aria-label="${dates[0]}-${dates[1]}-${dates[2]}"] > .mat-calendar-body-cell-content`).click()
}

module.exports = {
    click: element.click,
    textClick: element.textClick,
    input: element.input,
    select: element.select,
    dateSelect: element.dateSelect
};