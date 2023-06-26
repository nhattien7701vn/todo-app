import { AiOutlinePlus } from "react-icons/ai"
import Button from "../Button"
import Input from "../Input"

import { useState } from "react"
import "./index.css"

const TodoForm = ({ onAddTodo, handleEditTask }) => {
  const [value, setValue] = useState("")



  function handleFormSubmit(e) {
    e.preventDefault();
    if (!value) {
      alert('VUI LONG NHAP DAY DU THONG TIN')
      return
    }

    const newTodo = {
      id: window.crypto.randomUUID(),
      task: value,
      done: false
    }
    onAddTodo(newTodo)
    setValue("")
    // console.log("THEM TODO", value);

  }
  return (
    <form className="form-todo" onSubmit={handleFormSubmit}>
      <Input
        value={value}
        onInputChange={(text) => {
          setValue(text);
        }} />
      <Button type="submit" className="btn-primary"><AiOutlinePlus /></Button>
    </form>
  )
}

export default TodoForm
