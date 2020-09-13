import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
// function Test({intro, name}) {
// 	return (
// 		<h1>{intro}, {name}</h1>
// 	);
// }

Test.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
  onCheckboxClick: PropTypes.func,
};
Test.defaultProps = {
  todos: [],
  onTodoClick: null,
  onCheckboxClick: null,
};
function Test(props) {
  const { todos, onTodoClick, onCheckboxClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  function handleCheckboxClick(todo) {
    if (onCheckboxClick) {
      onCheckboxClick(todo);
    }
  }

  return (
    // <h1>{props.heading}</h1>
    <ul className="todo-list">
      {todos.map((todo) => (
        <li style={{ display: "flex", alignItems: "center" }} key={todo.id}>
          <Checkbox onClick={() => handleCheckboxClick(todo)} />
          {todo.title}
          <DeleteIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(todo)}
          />
        </li>
      ))}
    </ul>
  );
}

export default Test;
