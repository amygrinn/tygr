const underConstructionPage = require('./page-objects/under-construction.page');

describe('Under construction page', () => {
  beforeEach(underConstructionPage.open);

  it('should announce itself', () =>
    expect(underConstructionPage.header).toHaveText('Under construction!'));

  it('should have a link to the beta site', () =>
    expect(
      underConstructionPage.getLink('https://beta.tygr.info')
    ).toBeVisible());
});
