import { AiOutlineSearch } from 'react-icons/ai'
import '../../sass/components/SearchForm.scss'
import searchWikipedia from '../../store/services/searchWikipedia'
import Input from './Input'

const SearchForm = ({ onClick }) => {
  let msg = ''
  const handleSubmit = async (e) => {
    e.preventDefault()
    const keyword = e.currentTarget.searchInput.value.trim()
    try {
      const results = await searchWikipedia(keyword)
      console.log(results.query.search)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <small>{msg}</small>
      <Input className="search-input" />
      <button type="submit" onClick={onClick} className="search-button">
        <AiOutlineSearch></AiOutlineSearch>
      </button>
    </form>
  )
}

export default SearchForm
