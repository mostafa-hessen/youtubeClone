import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../global/Api";

function VideoDetailes() {
  const { id } = useParams();
  const [targetChannel, settargetChannel] = useState("");
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
    settargetChannel(data?.items[0].snippet);
  };
  return (
    <div>
      {/* ======  channel Info */}

      <div className="card text-center border-0 mb-4">
        <div className="--card-cup bg-primary"></div>
        {console.log(targetChannel)}
        <div className="card-body proavatar">
          <div
            className=" "
            // style={{ width: "170px", height: "170px" }}
          >
            <img src={targetChannel?.thumbnails?.high.url||"https://assets.codepen.io/4927073/icon-105_edited.jpg"} alt="nnnn" />
          </div>
          <h5 className="card-title text-primary mb-1">{targetChannel?.title}</h5>
          {/* // console.log(targetChannel?.items[0]?.snippet)
        // console.log(targetChannel)
    } */}
          <div className="text-muted">Data Science</div>
        </div>
        <div className="card-footer --card-footer two">
          <a
            className="card-link text-primary read-more two"
            href="javascript://"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoDetailes;
