const splashPage = require('./page-objects/splash.page');

describe('TyGr splash page', () => {
  beforeEach(splashPage.open);

  it('should announce itself', () =>
    expect(splashPage.header).toHaveText('TyGr Development!'));

  describe('Nav', () => {
    it('should have a link to the `home` page', () =>
      expect(splashPage.getLink('/')).toBeVisible());
    it('should have a link to the `cronpush` page', () =>
      expect(splashPage.getLink('/cronpush')).toBeVisible());
    it('should have a link to the `thank-you` page', () =>
      expect(splashPage.getLink('/thank-you')).toBeVisible());
    it('should have a link to the `vue-pie-chart` page', () =>
      expect(splashPage.getLink('/vue-pie-chart')).toBeVisible());
    it('should have a link to the `vue-time-picker` page', () =>
      expect(splashPage.getLink('/vue-time-picker')).toBeVisible());
    it('should have a link to the `vue-infinite-scroll` page', () =>
      expect(splashPage.getLink('/vue-infinite-scroll')).toBeVisible());
    it('should have a link to the `surge-spa-webpack-plugin` page', () =>
      expect(splashPage.getLink('/surge-spa-webpack-plugin')).toBeVisible());
  });
});
