const SplashPage = require('./page-objects/splash.page');

describe('TyGr splash page', () => {
  it('should greet us', async () => {
    await SplashPage.open();
    await expect(SplashPage.header).toHaveText('Hello world!');
  });
});
