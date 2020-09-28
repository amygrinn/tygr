const HomePage = require('./page-objects/home.page');

describe('Vue Pie Chart', () => {
  const vuePieChartPage = new HomePage('/vue-pie-chart');
  beforeEach(vuePieChartPage.open);

  it('should announce itself', () =>
    expect(vuePieChartPage.header).toHaveText('Vue Pie Chart!'));

  it('should have a description', () =>
    expect(vuePieChartPage.description).toBeVisible());
});
