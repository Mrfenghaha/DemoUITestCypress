function checkpoint(){}

checkpoint.containsText = function(element, text){
    // 验证元素是否含有指定字符
    cy.get(element).should('contain', text)
}

checkpoint.equalText = function(element, text){
    // 验证元素是否等于指定字符
    cy.get(element).should('have.text', text)
}

module.exports = {
    containsText: checkpoint.containsText,
    equalText: checkpoint.equalText
};