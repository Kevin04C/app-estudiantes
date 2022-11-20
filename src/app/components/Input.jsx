import '../../sass/components/Input.scss'

const Input = ({ onChange }) => {
  return (
    <input
      type="text"
      name="searchInput"
      placeholder="Buscador"
      onChange={onChange}
      className="input"
    />
  )
}

export default Input
