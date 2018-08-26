// import { expect } from 'chai';
const expect = require('chai').expect;
describe('TodoApp', () => {
  it('then it loads with title Todo List', () => {
    browser.url('http://localhost:300');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eq;
  });
});
