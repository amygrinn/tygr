module.exports = class Page {
  constructor(path) {
    this.path = path;
    this.open = this.open.bind(this);
  }

  open() {
    return browser.url(this.path || '');
  }

  get header() {
    return $(`[data-position='active'] h4`);
  }

  getLink(href) {
    return $(`a[href='${href}']`);
  }
};
