const Page = require('./page');

class VueInfiniteScrollPage extends Page {
  get header() {
    return $('h1');
  }

  open() {
    return super.open('/vue-infinite-scroll');
  }
}

module.exports = new VueInfiniteScrollPage();
