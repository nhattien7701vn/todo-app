import TodoItem from "./TodoItem"
import "./index.css"

const TodoList = ({ data, onToggle, onRemove, onEdit, onTodoDragEnter, onTodoDragStart,onTodoDragEnd }) => {
  function renderItems(todo) {
    return <TodoItem
      data={data}
      todo={todo}
      key={todo.id}
      onToggle={onToggle}
      onRemove={onRemove}
      onEdit={onEdit}
      onTodoDragStart={onTodoDragStart}
      onTodoDragEnter={onTodoDragEnter}
      onTodoDragEnd={onTodoDragEnd}
    />
  }
  return <ul>{data.map(renderItems)}</ul>
}

export default TodoList
