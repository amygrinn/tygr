const cronpushPage = require('./page-objects/cronpush.page');
const notFoundPage = require('./page-objects/not-found.page');

describe('Router', () => {
  it('should have `cronpush` page', async function () {
    await cronpushPage.open();
    return expect(cronpushPage.header).toHaveText('Cron Push!');
  });

  it('should not have a `made-up` page', async function () {
    await notFoundPage.open('/made-up');
    return expect(notFoundPage.header).toHaveText('404!');
  });
});
