import React, { useEffect, useState } from "react";

function LatestVidoes(props) {


  


  return (
    <>
      <div className="background"></div>
      <div className="background-texture"></div>
      <section className="carousel">
        <h2 className="categories__title">My List</h2>
        <div className="carousel__container">
       

          {props.latest?.map((ele,index) => {
            return (
              <div className="carousel-itemCard" key={index}>
                <img
                  className="carousel-itemCard__img"
                    src={ele.snippet.thumbnails.high.url}
              
                  alt="people"
                />
                <div className="carousel-itemCard__details">
                  <div className="controls">
                    <span className="fas fa-play-circle"></span>
                    <span className="fas fa-plus-circle"></span>
                  </div>
                  <h5 className="carousel-itemCard__details--title">
                    Descriptive Title
                  </h5>
                  <h6 className="carousel-itemCard__details--subtitle">
                    Date and Duration
                  </h6>
                </div>
              </div>
            );
          })}

          <div className="carousel-itemCard">
            <img
              className="carousel-itemCard__img"
              //   src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              src="https://i.imgur.com/oYiTqum.jpg"
              alt="people"
            />
            <div className="carousel-itemCard__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-itemCard__details--title">
                Descriptive Title
              </h5>
              <h6 className="carousel-itemCard__details--subtitle">
                Date and Duration
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestVidoes;
