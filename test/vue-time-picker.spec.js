const HomePage = require('./page-objects/home.page');

describe('Vue time picker', () => {
  const vueTimePickerPage = new HomePage('/vue-time-picker');
  beforeEach(vueTimePickerPage.open);

  it('should announce itself', () =>
    expect(vueTimePickerPage.header).toHaveText('Vue Time Picker!'));

  it('should have a description', () =>
    expect(vueTimePickerPage.description).toBeVisible());
});
