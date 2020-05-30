const home = require('../pages/homePage')
const showList = require('../pages/showListPage')
const showGoods = require('../pages/showGoodsPage')
const addSuccess = require('../pages/addSuccessPage')
const checkpoint = require('../../common/checkpoint')
const DataCreate = require('../../fixtures/dataCreate')


context('Test', function() {
  it('Search For Goods', function() {

    // cy.fixture('example.json').as('data')
    // 打开亚马逊网页
    cy.visit('/')
    // 搜索框输入搜索内容
    home.page.searchCriteriaInput(DataCreate.dataCreate()['search'])
    // 点击搜索按钮
    home.page.searchClick()
    // 点击商品
    showList.page.goodsInput(DataCreate.dataCreate()['goods'])
  })

  specify('Add Shop Cart', function() {
    // 打开亚马逊网页
    cy.visit(DataCreate.dataCreate()['url'])
    // 点击添加购物车
    showGoods.page.addShopCartInput()
    // 点击继续按钮
    // confirmShop.page.continueInput()
    cy.wait(3000).then(()=>{
      // 验证提示是否正确
    checkpoint.containsText(addSuccess.page.addSuccessText, '商品已加入购物车')
    // 验证价格是否正确
    checkpoint.equalText(addSuccess.page.amountText, '￥85.76')
  }) 
  })
})



