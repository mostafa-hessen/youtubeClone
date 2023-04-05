import React from 'react'
import {YoutubeCard,LatestVidoes} from './allComponent'
// import {} from './LatestVidoes'

function Videos(props) {
  console.log(props);
  return (
    <div className='row'>
      { props.selectedCategory=="Quran" ? <LatestVidoes  latest={props.videos}/>:""}
       <h2 className="text-capitalize mt-3"> new <span className="text-danger">Videos</span></h2>
       {props.videos?.map((ele,index)=> <div  key={index}className="col-4 mt-3"> <YoutubeCard video={ele}/></div>)} 
     
    </div>
  )
}

export default Videos