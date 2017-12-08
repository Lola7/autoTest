module.exports = {
  // '@disabled': true,
  '@tags': ['selectStep'],
  /**
   * 选择学阶断言
   * 正常流程
   */
  'selectStep' : function (browser) {
    const dialog = '.select-step-dialog';
    const stepName = '#step_name';
    const submit = '.dialog_ok';
    const stepBox = '#step_content';
    const stepList = '#steps_list';
    browser.url('http://localhost:8022/kaow-school/view/container/main/main.html');
    browser.waitForElementVisible(dialog, 5000);
    browser.click(submit);
    browser.pause(3000);
    browser.expect.element(stepName).text.to.not.equal('');
    browser.saveScreenshot('reports/newKaow/select-step/first-select-step-success.png');

    browser.refresh();
    browser.pause(3000);
    browser.saveScreenshot('reports/newKaow/select-step/reload-browser.png');

    browser.click(stepBox);
    browser.pause(3000);
    browser.expect.element(stepList).to.be.visible;

    browser.click(stepList);
    browser.pause(3000);
    browser.saveScreenshot('reports/newKaow/select-step/second-select.png');
    browser.end();
  }
};