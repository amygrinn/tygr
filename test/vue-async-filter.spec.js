const HomePage = require('./page-objects/home.page');

describe('Vue async filter', () => {
  const vueAsyncFilterPage = new HomePage('/vue-async-filter');
  beforeEach(vueAsyncFilterPage.open);

  it('should announce itself', () =>
    expect(vueAsyncFilterPage.header).toHaveText('Vue Async Filter!'));

  it('should have a description', () =>
    expect(vueAsyncFilterPage.description).toBeVisible());
});
