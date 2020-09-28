const HomePage = require('./page-objects/home.page');

describe('Cronpush', () => {
  const cronpushPage = new HomePage('/cronpush');
  beforeEach(cronpushPage.open);

  it('should announce itself', () =>
    expect(cronpushPage.header).toHaveText('Cron Push!'));

  it('should have a description', () =>
    expect(cronpushPage.description).toBeVisible());
});
