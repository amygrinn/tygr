const Page = require('./page');

class SplashPage extends Page {
  open() {
    return super.open('/cronpush');
  }
}

module.exports = new SplashPage();
