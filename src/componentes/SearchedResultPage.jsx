import React, { useEffect, useState } from 'react'
import {Videos} from './allComponent'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../global/Api';

function SearchedResultPage() {
    const [videos, setVideos] = useState(null);

    const {serchedValue}=useParams()
    // const validateSerch=serchedValue
    useEffect(() => {
        // setVideos(null);
        fetchFromAPI(`search?part=snippet,id&q=${serchedValue}`)
          .then((data) => setVideos(data.items))
        // console.log(serchedValue);
        }, [serchedValue]);
    
  return (
    <div className='container'>
        <Videos videos={videos}  selectedCategory={`you searched about ${serchedValue}`}/>
    </div>
  )
}

export default SearchedResultPage