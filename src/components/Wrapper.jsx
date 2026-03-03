import React from 'react'

function Wrapper({children}) {
  return (
    <div className='max-w-280 m-auto   '>
      {children}
    </div>
  )
}

export default Wrapper