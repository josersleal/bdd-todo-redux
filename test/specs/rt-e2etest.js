// import { expect } from 'chai';
const expect = require('chai').expect;
describe('Given there is an TodoApp', () => {
  describe('When starting the app', () => {
    it('then it loads with title Todo List', () => {
      browser.url('http://localhost:300');
      const actualTitle = browser.getTitle();

      expect(actualTitle).to.eq;
    });
  });
  describe('Given I want to create a todo', () => {
    it('Then allows me to create a Todo', () => {
      const todoText = 'some text';

      browser.url('http://localhost:300');
      browser.element('.todo-input').setValue(todoText);
      browser.click('.todo-submit');

      const actual = browser.element('.todo-text').getText();

      expect(actual).to.eq(todoText);
    });
  });
});
