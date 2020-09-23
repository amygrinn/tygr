const Page = require('./page');

class SplashPage extends Page {
  get header() {
    return $('h1');
  }

  open() {
    return super.open('/cronpush');
  }
}

module.exports = new SplashPage();
