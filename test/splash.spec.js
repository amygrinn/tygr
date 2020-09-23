const splashPage = require('./page-objects/splash.page');

describe('TyGr splash page', () => {
  beforeEach(splashPage.open);

  it('should greet us', () =>
    expect(splashPage.header).toHaveText('Hello world!'));

  describe('Nav', () => {
    it('should have a link to the `cronpush` page', () =>
      expect(splashPage.getLink('/cronpush')).toBeVisible());
  });
});
