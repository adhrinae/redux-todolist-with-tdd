/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const undoMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
        unDelete={undoMock}
        deleted={{}}
      />,
    );
  });

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} unDelete={undoMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });

  describe('Undelete button', () => {
    it('should exist when deleted todo is exists', () => {
      const deletedTodo = {
        id: 1,
        text: 'Some Todo',
      };

      component = mount(
        <AddTodo submitTodo={submitMock} unDelete={undoMock} deleted={deletedTodo} />,
      );
      expect(component.find('.todo-undelete').length).toEqual(1);
    });

    it('should not exist when deleted todo is not exists', () => {
      const deletedTodo = {};

      component = mount(
        <AddTodo submitTodo={submitMock} unDelete={undoMock} deleted={deletedTodo} />,
      );
      expect(component.find('.todo-undelete').length).toEqual(0);
    });

    it('should call the undoDelete function when clicked', () => {
      const deletedTodo = {
        id: 1,
        text: 'Some Todo',
      };

      component = mount(
        <AddTodo submitTodo={submitMock} unDelete={undoMock} deleted={deletedTodo} />
      );

      expect(undoMock.mock.calls.length).toEqual(0);
      component.find('.todo-undelete').simulate('click');
      expect(undoMock.mock.calls.length).toEqual(1);
    });
  });
});
