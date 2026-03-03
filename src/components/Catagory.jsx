import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'
function Catagory({className}) {
    const catagories=['buisness','entertainment','general','science','sports','technology','health']
    const {setNews,fetchNews}=useNewsContext()
    const handelClick=async(e)=>{
        const cat=e.target.value
        const data=await fetchNews('/everything?q='+cat)
        setNews(data)
    }
  return (

    <div className={` ${className}`}>
        <Wrapper>
       <div className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5 `}>
         {catagories.map((catagory)=>{
            return (
                <button onClick={handelClick} key={catagory}  value={catagory} className="btn btn-primary">{catagory}</button>
            )
        })}
       </div>
    </Wrapper>
    </div>
  )
}

export default Catagory