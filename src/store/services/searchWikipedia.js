const api = (search) =>
  `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`
const urlArticle = (id) => `https://en.wikipedia.org/?curid=${id}` //eslint-disable-line

const searchWikipedia = async (search) => {
  const res = await fetch(api(search))
  if (!res.ok) {
    throw Error(res.statusText)
  }
  const data = await res.json()
  return data
}

export default searchWikipedia
