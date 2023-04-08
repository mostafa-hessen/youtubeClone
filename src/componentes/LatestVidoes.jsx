import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LatestVidoes(props) {


  


  return (
    <>
      <div className="background"></div>
      <div className="background-texture"></div>
      <section className="carousel">
        <div className="carousel__container">
        <h2 className="m-0">My List</h2>

          {props.latest?.map((ele,index) => {
            return (
              <Link to={`videoDetailes/${ele?.id?.videoId}`} className="carousel-itemCard" key={index} >
                <img
                  className="carousel-itemCard__img"
                    src={ele.snippet.thumbnails.high.url}
              
                  alt="people"
                />
                <div className="carousel-itemCard__details" style={{    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap'}}>
                  <div className="controls">
                    <span className="fas fa-play-circle"></span>
                    <span className="fas fa-plus-circle"></span>
                  </div>
                  <h5 className="carousel-itemCard__details--title" style={{fontSize:'12px'}}>
                    {ele?.snippet?.title}
                  </h5>
                  <h6 className="carousel-itemCard__details--subtitle">
                    {/* Date and Duration */}
                  </h6>
                </div>
              </Link>
            );
          })}

         
        </div>
      </section>
    </>
  );
}

export default LatestVidoes;
