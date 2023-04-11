import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../global/Api';

function VideoPlayer() {
    const { id } = useParams();
    const [targetVideo, settargetVideo] = useState([]);
    useEffect(() => {
      getData();
      
    }, [id]);
  
    const getData = async () => {
      const video = await fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`);
      settargetVideo(video);
    };
  return (
 
           <div className="plyr__video-embed" id="player">
            <iframe
              src={`https://www.youtube.com/embed/${id}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
             <div className="detiles row justify-content-between align-items-center p-2">
     

                  <div className="col-12 col-md-8 mb-3 mt-2">
                  <h4 style={{fontSize:'16px' }}>{targetVideo?.items?.[0]?.snippet.title}</h4>

                      <div className="imgchannel&Name d-flex align-items-center mt-3">
                              <div className="img me-2" style={{width:"50px",height:"50px",  wordBreak: 'break-all',whiteSpace: 'pre-wrap'}}>
                                {console.log("F" , targetVideo)}
                                <img src={targetVideo.items?.[0]?.snippet.thumbnails.high.url} alt="channelImg" style={{height:"100%"}} />
                              </div>
                              <div >
                              <p style={{fontSize:'16px',margin:"0"}}>{targetVideo?.items?.[0]?.snippet?.channelTitle}</p>
                              <p style={{fontSize:'12px',margin:"0",color:"gray"}}>2382 subscriber</p>
                              </div>
                      </div>
                  </div>
                  <div className="col-12  col-md-4 mt-5 d-none d-md-block">
                    <div className="statistics  d-flex align-items-center justify-content-around">
            <p className="m-1 " style={{color:"gray",}}>{targetVideo?.items?.[0]?.statistics?.viewCount} <strong >views</strong></p>
            <p className="m-1 " style={{color:"gray"}}>{targetVideo?.items?.[0]?.statistics?.likeCount}      <strong >likes</strong></p>
                    </div>
                  </div>
             </div> </div>  )
  
}

export default VideoPlayer