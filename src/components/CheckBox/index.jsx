import "./index.css"
const CheckBox = ({ checked, onToggle }) => {

  return (
    <input onChange={() => onToggle()} className="input-checkbox" type="checkbox" checked={checked} />
  )
}

export default CheckBox
