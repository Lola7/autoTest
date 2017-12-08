module.exports = {
  '@tags': ['login'],
  /**
   * 登录断言
   * 1.验证表单的显示是否完整
   * 2.验证是否能正常登陆
   */
  'login' : function (browser) {
    // 定义登录页面中的节点.
    const userName = 'input[name="userName"]';
    const password = 'input[name="password"]';
    const loginBtn = '#loginBtn';
    //打开浏览器并打开网页
    browser.url('http://localhost:8022/kaow-school/view/container/index/index.html');
    //等待页面元素加载完成 
    browser.waitForElementVisible(userName, 5000);
    // browser.waitForElementVisible(password, 5000);
    browser.waitForElementVisible(loginBtn, 5000);
    //填写开发环境学校端帐号和密码
    browser.setValue(userName, '13611474977');
    browser.setValue(password, '123456');
    browser.click(loginBtn);
    // 截一张图然后保存到 "reports/newkaow/login.png". 
    browser.expect.element('body').to.be.present;
    browser.saveScreenshot('reports/newKaow/index.png');
    browser.end();
  }
  /**
   * 有验证码的登陆断言
   * 1.两次登陆失败后弹出验证码
   * 2.不输入验证码不能登陆
   * 3.输错验证码也不能登陆
   * 4.正确输入用户名，密码和验证码后成功登陆
   */
  // 'codeLogin' : function (browser) {
  //   // 定义登录页面中的节点.
  //   const userName = 'input[name="userName"]';
  //   const password = 'input[name="password"]';
  //   const loginBtn = '#loginBtn';
  //   const validBox = '.code';
  //   const code = '#code';
  //   const checkTips = '.cheackTips';

  //   //打开浏览器并打开网页
  //   browser.url('http://localhost:8022/kaow-school/view/container/index/index.html');

  //   //等待页面元素加载完成 
  //   browser.waitForElementVisible(userName, 5000);
  //   browser.waitForElementVisible(password, 5000);
  //   browser.waitForElementVisible(loginBtn, 5000);

  //   //第一次错误填写帐号和密码
  //   browser.setValue(userName, '13611474977');
  //   browser.setValue(password, '12345');
  //   browser.click(loginBtn);
  //   browser.expect.element(validBox).to.not.be.present;

  //   //第二次错误填写帐号和密码
  //   browser.clearValue(userName).setValue(userName, '13611474977');
  //   browser.clearValue(password).setValue(password, '12345');
  //   browser.click(loginBtn);
  //   browser.expect.element(validBox).to.not.be.present;

  //   //第三次错误填写帐号和密码
  //   browser.clearValue(userName).setValue(userName, '13611474977');
  //   browser.clearValue(password).setValue(password, '12345');
  //   browser.click(loginBtn);
  //   browser.expect.element(validBox).to.be.present;
  //   browser.expect.element(code).to.have.attribute("src").which.contains('oauth/picture/check');

  //   //重新加载页面，依然弹出验证码
  //   browser.refresh();
  //   browser.expect.element(validBox).to.be.present;
  //   browser.expect.element(code).to.have.attribute("src").which.contains('oauth/picture/check');

  //   //正确填写帐号和密码，不填验证码
  //   browser.clearValue(userName).setValue(userName, '13611474977');
  //   browser.clearValue(password).setValue(password, '123456');
  //   browser.click(loginBtn);
  //   browser.expect.element(checkTips).to.be.present;

  //   //正确填写帐号和密码，填写错误验证码
  //   browser.clearValue(userName).setValue(userName, '13611474977');
  //   browser.clearValue(password).setValue(password, '123456');
  //   browser.setValue(code, '123');
  //   browser.click(loginBtn);
  //   browser.expect.element(checkTips).to.be.present;

  //   //正确填写帐号和密码，填写超级验证码（验证码不能通过自动化测试获得图片中的文字信息）
  //   browser.clearValue(userName).setValue(userName, '13611474977');
  //   browser.clearValue(password).setValue(password, '123456');
  //   browser.setValue(code, '111111');
  //   browser.click(loginBtn);
  //   browser.pause(2000);
  //   // 截一张图然后保存到 "reports/newkaow/login.png". 
  //   browser.expect.element('body').to.be.present;
  //   browser.saveScreenshot('reports/newKaow/index.png');
  //   browser.assert.urlContains('/kaow-school/view/container/main/main.html');
  //   browser.end();
  // }
};