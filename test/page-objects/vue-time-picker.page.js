const Page = require('./page');

class VueTimePickerPage extends Page {
  get header() {
    return $('h1');
  }

  open() {
    return super.open('/vue-time-picker');
  }
}

module.exports = new VueTimePickerPage();
