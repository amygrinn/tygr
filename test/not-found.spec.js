const HomePage = require('./page-objects/home.page');

describe('Not found page', () => {
  it('should not have a `made-up` page', async function () {
    const notFoundPage = new HomePage('/made-up');
    await notFoundPage.open();
    return expect(notFoundPage.header).toHaveText('404!');
  });
});
