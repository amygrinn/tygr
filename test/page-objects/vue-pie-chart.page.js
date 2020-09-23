const Page = require('./page');

class VuePieChartPage extends Page {
  get header() {
    return $('h1');
  }

  open() {
    return super.open('/vue-pie-chart');
  }
}

module.exports = new VuePieChartPage();
