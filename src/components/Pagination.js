import React from 'react'
import { useGlobalFirstContext } from '../context/firstcontext'

const Pagination = () => {
  const {page,nbPages,getNextPage,getPrevPage} = useGlobalFirstContext();
  return (
    <>
    <div className="pagination-btn">
      <button onClick={() => getPrevPage()}>PREV</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => getNextPage()}>NEXT</button>
    </div>
  </>
  )
}

export default Pagination