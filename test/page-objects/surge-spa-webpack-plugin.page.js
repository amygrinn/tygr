const Page = require('./page');

class SurgeSPAWebpackPluginPage extends Page {
  get header() {
    return $('h1');
  }

  open() {
    return super.open('/surge-spa-webpack-plugin');
  }
}

module.exports = new SurgeSPAWebpackPluginPage();
