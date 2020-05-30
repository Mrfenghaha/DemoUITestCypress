const element = require('../../common/element')

function page(){}

//点击商品
// page.goods = goodsName
page.goodsInput = function(goodsName){
    element.textClick(goodsName)
}
//点击下一页按钮
page.contains = '下一页'
page.lastPageClick = function(goodsName){
    element.textClick(page.lastPage, goodsName)
}

module.exports = {
    page: page
};