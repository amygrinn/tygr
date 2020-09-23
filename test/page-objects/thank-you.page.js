const Page = require('./page');

class ThankYouPage extends Page {
  get header() {
    return $('h1');
  }

  open() {
    return super.open('/thank-you');
  }
}

module.exports = new ThankYouPage();
