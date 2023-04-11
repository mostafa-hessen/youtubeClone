import React from 'react'

function SkeltonLatest() {
  return (
    <div style={{display:'inline-block'}} className='skelton'>
        <div  className="carousel-itemCard" style={{background:"#3A3B3C"}} >
                
                <div className="carousel-itemCard__details" style={{    wordBreak: 'break-all',  whiteSpace: 'pre-wrap'}}>
                  <div className="controls">
                    <span className="fas fa-play-circle"></span>
                    <span className="fas fa-plus-circle"></span>
                  </div>
                  <h5 className="carousel-itemCard__details--title" style={{fontSize:'12px'}}>
                  </h5>
                  <h6 className="carousel-itemCard__details--subtitle">
                  </h6>
                </div>
              </div>
    </div>
  )
}

export default SkeltonLatest