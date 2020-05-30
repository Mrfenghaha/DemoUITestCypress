const element = require('../../common/element')

function page(){}

//搜索框输入
page.searchCriteria = '.nav-search-field .nav-input'
page.searchCriteriaInput = function(value){
    element.input(page.searchCriteria, value)
}
//点击搜索按钮
page.search = '.nav-search-submit .nav-input'
page.searchClick = function(){
    element.click(page.search)
}

function funcs(){}

funcs.searchGood = function(searchCriteria){
    page.searchCriteriaInput(searchCriteria);
    page.searchClick()
}

module.exports = {
    page: page,
    funcs: funcs
};