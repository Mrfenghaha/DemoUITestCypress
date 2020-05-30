//定义测试
describe('My First Test', function() {
  //定义case
  it('Gets, types and asserts', function() {
    // 发送请求，并获取响应
    cy.request({
      method: 'GET',
      url: 'https://www.amazon.cn/',
    }).then((resp)=>{
      // 检查点，验证响应状态是否是200
      expect(resp.status).to.eq(200)
  })
  })
})