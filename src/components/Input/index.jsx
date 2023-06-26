import { useEffect, useRef } from 'react';
import './index.css'

const Input = ({ value, onInputChange}) => {
  function handleInputChange(e) {
    onInputChange(e.target.value);
  }

  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus()
  }, []);

  
  return (
    <input value={value} onChange={handleInputChange} className='input-text' placeholder='ENTER TASK' ref={inputRef} />
  )
}

export default Input
