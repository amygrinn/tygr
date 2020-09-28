const Page = require('./page');

const activePage = `[data-position='active']`;

class HomePage extends Page {
  get header() {
    return $(`${activePage} h4`);
  }

  get description() {
    return $(`${activePage} .description`);
  }
}

module.exports = HomePage;
