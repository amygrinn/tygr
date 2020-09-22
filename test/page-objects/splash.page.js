const Page = require('./page');

class SplashPage extends Page {
  get header() {
    return $('h1');
  }
}

module.exports = new SplashPage();
