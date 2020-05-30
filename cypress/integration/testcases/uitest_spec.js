//准备数据
var data = {"search": "惠百施 熊本熊 成人牙刷", "goods": "惠百施 熊本熊 成人牙刷 （颜色随机）","url": "https://www.amazon.cn/dp/B00H4ST192/ref=sr_1_1?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&keywords=%E6%83%A0%E7%99%BE%E6%96%BD+%E7%86%8A%E6%9C%AC%E7%86%8A+%E6%88%90%E4%BA%BA%E7%89%99%E5%88%B7&qid=1590396419&sr=8-1"}

//定义测试
describe('Test', function() {

  //定义case
  it('Search For Goods', function() {
  
    // 访问亚马逊官网
    cy.visit('https://www.amazon.cn') 
    
    // 根据元素class定位搜索框，并输入“惠百施 熊本熊 成人牙刷”
    cy.get('.nav-search-field .nav-input').type(data['search'])
    
    // 检查点，根据元素class定位搜索框，判断是否有值“惠百施 熊本熊 成人牙刷”
    cy.get('.nav-search-field .nav-input').should('have.value', data['search']) 

    // 根据元素class定位搜索按钮，并点击
    cy.get('.nav-search-submit .nav-input').click({force:true})

    // 根据定位搜索框，并点击“惠百施 熊本熊 成人牙刷”
    cy.contains(data['goods']).click({force:true})  
  })
  
  //定义case
  specify('Add Shop Cart', function() {
  
    // 访问商品链接
    cy.visit(data['url'])
    
    // 根据元素selector定位加入购物车按钮，并点击
    cy.get('#add-to-cart-button').click({force:true}) 

    // 等待3000ms
    cy.wait(3000).then(()=>{
    
    // 根据元素selector定位添加购物车成功提示，并比较提示中是否包含“商品已加入购物车”
    cy.get('#huc-v2-order-row-confirm-text > h1').should('contain', '商品已加入购物车')
    
    // 根据元素selector定位价格信息，并比较提示中是否等于“￥85.76”
    cy.get('#hlb-subcart > div.a-row.a-spacing-micro > span > span.a-color-price.hlb-price.a-inline-block.a-text-bold').should('have.text', '￥85.76')
  }) 
  })
})
