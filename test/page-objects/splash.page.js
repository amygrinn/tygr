const Page = require('./page');

class SplashPage extends Page {
  get header() {
    return $('h1');
  }

  getLink(href) {
    return $(`a[href='${href}']`);
  }
}

module.exports = new SplashPage();
