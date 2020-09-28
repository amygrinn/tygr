const HomePage = require('./page-objects/home.page');

describe('Vue infinite scroll', () => {
  const vueInfiniteScrollPage = new HomePage('/vue-infinite-scroll');
  beforeEach(vueInfiniteScrollPage.open);

  it('should announce itself', () =>
    expect(vueInfiniteScrollPage.header).toHaveText('Vue Infinite Scroll!'));

  it('should have a description', () =>
    expect(vueInfiniteScrollPage.description).toBeVisible());
});
