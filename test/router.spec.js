const notFoundPage = require('./page-objects/not-found.page');
const cronpushPage = require('./page-objects/cronpush.page');
const thankYouPage = require('./page-objects/thank-you.page');
const vuePieChartPage = require('./page-objects/vue-pie-chart.page');
const vueTimePickerPage = require('./page-objects/vue-time-picker.page');
const vueInfiniteScrollPage = require('./page-objects/vue-infinite-scroll.page');
const surgeSPAWebpackPluginPage = require('./page-objects/surge-spa-webpack-plugin.page');
const nativescriptPluginGooglePlacesPage = require('./page-objects/nativescript-plugin-google-places.page');

describe('Router', () => {
  it('should not have a `made-up` page', async function () {
    await notFoundPage.open('/made-up');
    return expect(notFoundPage.header).toHaveText('404!');
  });

  it('should have a `cronpush` page', async function () {
    await cronpushPage.open();
    return expect(cronpushPage.header).toHaveText('Cron Push!');
  });

  it('should have a `thank-you` page', async function () {
    await thankYouPage.open();
    return expect(thankYouPage.header).toHaveText('thank-you!');
  });

  it('should have a `vue-pie-chart` page', async function () {
    await vuePieChartPage.open();
    return expect(vuePieChartPage.header).toHaveText('Vue Pie Chart!');
  });

  it('should have a `vue-time-picker` page', async function () {
    await vueTimePickerPage.open();
    return expect(vueTimePickerPage.header).toHaveText('Vue Time Picker!');
  });

  it('should have a `vue-infinite-scroll` page', async function () {
    await vueInfiniteScrollPage.open();
    return expect(vueInfiniteScrollPage.header).toHaveText(
      'Vue Infinite Scroll!'
    );
  });

  it('should have a `surge-spa-webpack-plugin` page', async function () {
    await surgeSPAWebpackPluginPage.open();
    return expect(surgeSPAWebpackPluginPage.header).toHaveText(
      'Surge SPA Webpack Plugin!'
    );
  });

  it('should have a `nativescript-plugin-google-places` page', async function () {
    await nativescriptPluginGooglePlacesPage.open();
    return expect(nativescriptPluginGooglePlacesPage.header).toHaveText(
      'Nativescript Plugin for Google Places!'
    );
  });
});
