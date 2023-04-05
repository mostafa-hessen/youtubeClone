import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../global/Api";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function YoutubeCard(props) {
  const [myChannelImg, setmyChannelImg] = useState('')
  useEffect(() => {
      // fetchFromAPI(`channels?part=snippet&id=${ props.video.snippet.channelId }`)
      // .then((data) => console.log(data))
      // props.video.gg='s'   
      // console.log(     props.video.snippet.channelId      );
 
  }, [])
  let date=  new Date().getFullYear()
  
  return (
    <div>
      
{/* ===  item  */}
      


      <ul className="cards list-unstyled">
        <li>
          <div href="" className="card">
            <div className="imgCard" style={{width:"100%",height:"300px"}}>
            <img
              src={props.video?.snippet.thumbnails?.high.url              }
              className="card__image"
              alt=""
            />
            </div>
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
               <Link className="cardImg " to={`/channelDetailes/${props.video?.snippet.channelId}`}  >
                 <img
                  className="card__thumb"
                  src={props.video?.snippet.thumbnails?.high.url   }
                  alt=""
                  />
               </Link>
                <div className="card__header-text">
                  <h3 className="card__title">{props.video.snippet.title}</h3>
                  <span className="card__status">{props.video?.snippet?.publishTime?.split('-')[0]!=2023? date-props.video?.snippet?.publishTime?.split('-')[0] + ` years` :2023 }   </span>
                </div>
              </div>
              <p className="card__description">
              {props.video?.snippet.description   }
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default YoutubeCard;
