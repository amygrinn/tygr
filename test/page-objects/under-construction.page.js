const Page = require('./page');

class UnderConstructionPage extends Page {
  constructor() {
    super('/under-construction.html');
  }

  get header() {
    return $('h1');
  }
}

module.exports = new UnderConstructionPage();
