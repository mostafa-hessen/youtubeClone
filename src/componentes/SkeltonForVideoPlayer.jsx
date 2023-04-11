import React from 'react'

function SkeltonForVideoPlayer() {
  return (
    <div>
        <div className="plyr__video-embed mb-4" id="player">
            <iframe
            style={{background:"#3A3B3C"}}
            //   src={`https://www.youtube.com/embed/${id}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
             <div className="detiles row justify-content-between align-items-center p-2">
     

                  <div className="col-12 col-md-8 mb-3 mt-2">
                  <h4 style={{fontSize:'16px',background:"#3A3B3C",width:"80%",height:"27px" }}>
                    </h4>

                      <div className="imgchannel&Name d-flex align-items-center mt-3">
                              <div className="img me-2" style={{width:"50px",height:"50px",  wordBreak: 'break-all',whiteSpace: 'pre-wrap',background:"#3A3B3C"}}>
                              </div>
                              <div >
                              <p style={{fontSize:'16px',margin:"0",background:"#3A3B3C",width:"100px",height:"18px"}}>
                                </p>
                              <p style={{fontSize:'12px',margin:"0",color:"gray",background:"#3A3B3C",width:"70%",height:"10px",marginTop:"5px"}}></p>
                              </div>
                      </div>
                  </div>
                  <div className="col-12  col-md-4 mt-5 d-none d-md-block">
                    <div className="statistics  d-flex align-items-center justify-content-around">
            <p className="m-1 " style={{color:"gray",background:"#3A3B3C",width:"44%",height:"20px"}}>
                 <strong > </strong></p>
            <p className="m-1" style={{color:"gray",background:"#3A3B3C",width:"44%",height:"20px"}}>    <strong ></strong></p>
                    </div>
                  </div>
             </div>
          </div> 
    </div>
  )
}

export default SkeltonForVideoPlayer