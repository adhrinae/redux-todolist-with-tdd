/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList Component', () => {
  const todos = [
    {
      id: 1,
      text: 'A todo',
    },
  ];

  const component = shallow(<TodoList todos={todos} />);

  it('should redner successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should display a todo when passed in as a prop', () => {
    expect(component.find('.todo-text').text()).toEqual(todos[0].text);
  });
});
