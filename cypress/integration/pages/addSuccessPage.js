const element = require('../../common/element')

function page(){}

//添加成功提示
page.addSuccessText = '#huc-v2-order-row-confirm-text > h1'

//购物车金额
page.amountText = '#hlb-subcart > div.a-row.a-spacing-micro > span > span.a-color-price.hlb-price.a-inline-block.a-text-bold'

module.exports = {
    page: page
};