const HomePage = require('./page-objects/home.page');

describe('Surge SPA Webpack Plugin', () => {
  const surgeSPAWebpackPluginPage = new HomePage('/surge-spa-webpack-plugin');
  beforeEach(surgeSPAWebpackPluginPage.open);

  it('should announce itself', () =>
    expect(surgeSPAWebpackPluginPage.header).toHaveText(
      'Surge SPA Webpack Plugin!'
    ));

  it('should have a description', () =>
    expect(surgeSPAWebpackPluginPage.description).toBeVisible());
});
