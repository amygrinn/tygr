const splashPage = require('./page-objects/splash.page');

describe('TyGr splash page', () => {
  it('should greet us', async () => {
    await splashPage.open();
    await expect(splashPage.header).toHaveText('Hello world!');
  });
});
