import  {  useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { useNewsContext } from '../context/NewsContext'
import Loader from '../components/Loader'

function News({className}) {


    const {news,setNews,fetchNews,loading}=useNewsContext()
    

    // load data on initial render
    useEffect(()=>{
        (async()=>{
            // fetchNews already returns the articles array, so avoid accessing .articles again
            const data = await fetchNews()
            setNews(data)
        })()
    },[])
    if(loading) return <Loader/>
  return (
   <Wrapper>
     <div className={`grid grid-cols-4 gap-6 ${className}`}>
            {news.map((newsDetails)=>{
                if(!newsDetails.urlToImage) return null
                return <NewsCard key={newsDetails.url} details={newsDetails} />
            })}        
     </div>
   </Wrapper>
  )
}


const NewsCard=({details})=>{
    return (
        <div className="card bg-base-300  shadow-sm">
  <figure>
    <img className='aspect-video object-contain w-full'
      src={details?.urlToImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{details?.title}</h2>
    <p className="line-clamp-3">{details?.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>window.open(details.url)} className=" badge-outline btn mt-4">Read More</button>
    </div>
  </div>
</div>
    )
}
export default News