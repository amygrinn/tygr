const HomePage = require('./page-objects/home.page');

describe('Home page', () => {
  const homePage = new HomePage();
  beforeEach(homePage.open);

  it('should announce itself', () =>
    expect(homePage.header).toHaveText('TyGr Development!'));

  it('should have a description', () =>
    expect(homePage.description).toBeVisible());
});
