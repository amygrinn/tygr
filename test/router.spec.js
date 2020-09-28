const HomePage = require('./page-objects/home.page');

describe('Router', () => {
  it('should not have a `made-up` page', async function () {
    const notFoundPage = new HomePage('/made-up');
    await notFoundPage.open();
    return expect(notFoundPage.header).toHaveText('404!');
  });

  it('should have a `cronpush` page', async function () {
    const cronpushPage = new HomePage('/cronpush');
    await cronpushPage.open();
    return expect(cronpushPage.header).toHaveText('Cron Push!');
  });

  it('should have a `thank-you` page', async function () {
    const thankYouPage = new HomePage('/thank-you');
    await thankYouPage.open();
    return expect(thankYouPage.header).toHaveText('thank-you!');
  });

  it('should have a `vue-async-filter` page', async function () {
    const vueAsyncFilterPage = new HomePage('/vue-async-filter');
    await vueAsyncFilterPage.open();
    return expect(vueAsyncFilterPage.header).toHaveText('Vue Async Filter!');
  });

  it('should have a `vue-pie-chart` page', async function () {
    const vuePieChartPage = new HomePage('/vue-pie-chart');
    await vuePieChartPage.open();
    return expect(vuePieChartPage.header).toHaveText('Vue Pie Chart!');
  });

  it('should have a `vue-time-picker` page', async function () {
    const vueTimePickerPage = new HomePage('/vue-time-picker');
    await vueTimePickerPage.open();
    return expect(vueTimePickerPage.header).toHaveText('Vue Time Picker!');
  });

  it('should have a `vue-infinite-scroll` page', async function () {
    const vueInfiniteScrollPage = new HomePage('/vue-infinite-scroll');
    await vueInfiniteScrollPage.open();
    return expect(vueInfiniteScrollPage.header).toHaveText(
      'Vue Infinite Scroll!'
    );
  });

  it('should have a `surge-spa-webpack-plugin` page', async function () {
    const surgeSPAWebpackPluginPage = new HomePage(
      './surge-spa-webpack-plugin'
    );
    await surgeSPAWebpackPluginPage.open();
    return expect(surgeSPAWebpackPluginPage.header).toHaveText(
      'Surge SPA Webpack Plugin!'
    );
  });
});
