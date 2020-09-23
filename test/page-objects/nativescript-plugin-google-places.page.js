const Page = require('./page');

class NativescriptPluginGooglePlacesPage extends Page {
  get header() {
    return $('h1');
  }

  open() {
    return super.open('/nativescript-plugin-google-places');
  }
}

module.exports = new NativescriptPluginGooglePlacesPage();
