const element = require('../../common/element')

function page(){}  

//点击添加购物车按钮
page.addShopCart = '#add-to-cart-button'
page.addShopCartInput = function(value){
    element.click(page.addShopCart)
}

module.exports = {
    page: page
};