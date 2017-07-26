import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo, unDelete, deleted }) => {
  let input;

  const unDeleteButton = () => (
    <button onClick={() => unDelete()} className="todo-undelete">
      Undelete
    </button>
  );

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
        />

        <button type="submit" className="todo-submit">
          Add Todo
        </button>

        {Object.keys(deleted).length > 0 ? unDeleteButton() : ''}
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  unDelete: PropTypes.func.isRequired,
  deleted: PropTypes.shape(
    {
      id: PropTypes.number,
      text: PropTypes.string,
    },
  ).isRequired,
};

export default AddTodo;
