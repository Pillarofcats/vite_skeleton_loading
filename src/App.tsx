import './App.css'

import useMockAPIFetch from './hooks/useMockAPIFetch'
import LoadingSkeletonArticle from './components/LoadingSkeletonArticle'
import Article from './components/Article'

function App() {
  const jsonURL = 'mockAPIData.json'
  const { data, isLoading, error } = useMockAPIFetch(jsonURL)

  if(error) return <p>Error</p>

  return (
    <div className='app-container'>
      <h1>ARTICLES LOADING ON A WEBPAGE</h1>
      <div className='loading-data-container'>
        {
          isLoading ? 
            (
              [...Array(4).keys()].map((ind) => {
                return (<LoadingSkeletonArticle key={ind} />)
              })
            )
          :
            data?.map((elem, ind) => {
              return (<Article key={ind} title={ elem.title } text={ elem.text } id={`article-${ind.toString()}`} />)
            })
        }
      </div>
    </div>
  )
}

export default App
