const element = require('../../common/element/element')

function page(){}

//点击继续按钮
page.continue = '.add-to-cart-button'
page.continueInput = function(){
    element.click(page.continue)
}

module.exports = {
    page: page
};