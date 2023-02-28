import React from 'react'
import { useGlobalFirstContext } from '../context/firstcontext'
const Search = () => {   
    const {query,searchPost} = useGlobalFirstContext();
  return (
    <>
      <h1>Latest News Via API Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  )
}

export default Search