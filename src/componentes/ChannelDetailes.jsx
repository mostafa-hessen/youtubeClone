import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../global/Api";
import channelLogo from '../assets/Youtube-Channel-Template-Final-1.png'
import { Videos } from "./allComponent";
function ChannelDetailes() {

  const { id } = useParams();
  const [targetChannel, settargetChannel] = useState("");
  const [videoChannel, setvideoChannel] = useState([]);
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
    const channelVideos = await fetchFromAPI(`search?part=snippet&channelId=${id}`);
    settargetChannel(channelData?.items[0].snippet);
    setvideoChannel(channelVideos?.items);
  };
  return (
    <div>
      {/* ======  channel Info ===== */}

      <div className="card text-center border-0 mb-4 mt-5">
        <div className="--card-cup bg-primary"></div>
        <div className="card-body proavatar" style={{marginTop:"-70px"}}>
          <div
            className=" img m-auto mb-3"
            style={{ width: "170px", height: "170px" }}
          >
            <img className="imgYoutube" src={targetChannel?.thumbnails?.high.url||channelLogo} alt="nnnn" />
          </div>
          <h5 className="card-title text-primary mb-1">{targetChannel?.title}</h5>
          {/* // console.log(targetChannel?.items[0]?.snippet)
        // console.log(targetChannel)
    } */}
          <div className="text-muted">{targetChannel?.customUrl}</div>
        </div>
        <div className="card-footer --card-footer two">
          <a
            className="card-link text-primary read-more two p-1 rounded-1"
            href="javascript://"
            style={{textDecoration:"none",}}
          >
            Follow
          </a>
        </div>
      </div>

      {/* ======  channel videos ===== */}
{console.log(videoChannel)}

<div className="container-fluid">

    <Videos fromdetailes={true} videos={videoChannel}/>
</div>


    </div>
  );
}

export default ChannelDetailes;
