import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import searchWikipedia from '../../store/search/searchSlice'
import SearchForm from '../components/SearchForm'

const ArticlesPage = () => {
  const [data, setData] = useState([])
  const { search } = useParams()

  useEffect(() => {
    setData(searchWikipedia(search))
    console.log(data)
  }, [search])

  console.log(data)
  return (
    <div className="articles-page">
      <SearchForm />
      <section></section>
    </div>
  )
}

export default ArticlesPage
