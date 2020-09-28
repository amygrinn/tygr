const Page = require('./page-objects/page');

describe('Nav', () => {
  const page = new Page();
  beforeEach(page.open);

  it('should have a link to the `home` page', () =>
    expect(page.getLink('/')).toBeVisible());
  it('should have a link to the `cronpush` page', () =>
    expect(page.getLink('/cronpush')).toBeVisible());
  it('should have a link to the `thank-you` page', () =>
    expect(page.getLink('/thank-you')).toBeVisible());
  it('should have a link to the `vue-pie-chart` page', () =>
    expect(page.getLink('/vue-pie-chart')).toBeVisible());
  it('should have a link to the `vue-time-picker` page', () =>
    expect(page.getLink('/vue-time-picker')).toBeVisible());
  it('should have a link to the `vue-infinite-scroll` page', () =>
    expect(page.getLink('/vue-infinite-scroll')).toBeVisible());
  it('should have a link to the `surge-spa-webpack-plugin` page', () =>
    expect(page.getLink('/surge-spa-webpack-plugin')).toBeVisible());
});
