/* global describe, it, browser */
const expect = require('chai').expect;

const BASE_URL = 'http://localhost:3000/';

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url(BASE_URL);
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at TDD';
    browser.url(BASE_URL);
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });
});

