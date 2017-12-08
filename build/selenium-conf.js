const process = require('process');

module.exports = {
    // Selenium 的版本配置信息。请在下方链接查询最新版本。升级版本只需修改版本号即可。
    // https://selenium-release.storage.googleapis.com/index.html
    selenium: {
        version: '3.5.3',
        baseURL: 'https://selenium-release.storage.googleapis.com'
    },

    // Driver 用来启动系统中安装的浏览器，Selenium 默认使用 Firefox，如果不需要使用其他浏览器，则不需要额外安装 Driver。
    // 在此我们安装 Chrome 的 driver 以便使用 Chrome 进行测试。
    driver: {
        chrome: {
            // Chrome 浏览器启动 Driver，请在下方链接查询最新版本。
            // https://chromedriver.storage.googleapis.com/index.html
            version: '2.33',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com'
        },
        gecko: {
          version: '0.18.0',
          arch: process.arch,
          baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
        },
        ie: {
          // Check latest version here: https://selenium-release.storage.googleapis.com/index.html
          version: '3.4.0',
          arch: process.arch,
          baseURL: 'https://selenium-release.storage.googleapis.com'
        },
        edge: {
          version: '15063'
        }
    }
};