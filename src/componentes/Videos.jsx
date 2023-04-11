import React, { useEffect, useState } from 'react'
import {YoutubeCard,LatestVidoes, SkeltonEffect, SkeltonLatest} from './allComponent'
// import {} from './LatestVidoes'

function Videos(props) {
  const [Load, setLoad] = useState(true)
  useEffect(() => {
    
  setTimeout(() => {
    setLoad(false)
  }, 3500);
   
  setLoad(true)

  console.log(props?.selectedCategory);
  }, [props?.selectedCategory])
  
  return (  
      <div className='row ' style={{marginTop:"80px"}}>
      { props?.selectedCategory=="Quran" ?<>   
           {/* <h2 className="m-0">My List</h2> */}
           {<LatestVidoes  latest={props.videos}/>}
 </>:""}
   { !props?.fromdetailes &&  <h2 className="text-capitalize mt-3"> {props?.selectedCategory} <span className="text-danger">Videos</span></h2>}
       {props.videos?.map((ele,index)=> <div  key={index}className="col-12 col-md-6 col-lg-4 mt-3">{Load?<SkeltonEffect/>: <YoutubeCard video={ele}/>}</div>)} 
     
    </div>
  )
}

export default Videos