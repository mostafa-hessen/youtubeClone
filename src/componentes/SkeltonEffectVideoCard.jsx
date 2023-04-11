import React from 'react'

function SkeltonEffect() {
  return (
    <div>
              <ul className="cards list-unstyled skelton">
        <li>
          <div href="" className="card">
            <div className="imgCard " style={{width:"100%",height:"300px",background:"#3A3B3C"}}    >
            {/* <img */}
            {/* //   src={props.video.snippet.thumbnails.high.url||cardimg}
            //   className="card__image"
            //   alt=""
            // /> */}
            </div>
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
               <div className="img skelton"  style={{width:"50px",height:"50px",background:"#3A3B3C"}}  >
                 {/* <img
                  className="card__thumb"
                  src={props.video?.snippet.thumbnails?.high.url ||cardimg  }
                  alt=""
                  /> */}
               </div>
                <div className="card__header-text  rounded-1 skelton" style={{width:"50%",height:"20px",background:"#3A3B3C"}} >
                  <h3 className="card__title"> </h3>
                  <span className="card__status">
                     </span>
                </div>
              </div>
              <p className="card__description "  style={{width:"50%",height:"20px"}}>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SkeltonEffect