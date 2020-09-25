const Page = require('./page');

class SplashPage extends Page {
  getLink(href) {
    return $(`a[href='${href}']`);
  }
}

module.exports = new SplashPage();
