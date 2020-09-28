const HomePage = require('./page-objects/home.page');

describe('thank-you', () => {
  const thankYouPage = new HomePage('/thank-you');
  beforeEach(thankYouPage.open);

  it('should announce itself', () =>
    expect(thankYouPage.header).toHaveText('thank-you!'));

  it('should have a description', () =>
    expect(thankYouPage.description).toBeVisible());
});
