import React, { useEffect, useState } from "react";
import { MainNavBar, YoutubeCard } from "./allComponent";
import Videos from "./Videos";
import { fetchFromAPI } from "../global/Api";

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("Quran");
    const [videos, setVideos] = useState(null);
  
    useEffect(() => {
      setVideos(null);
      // fetchFromAPI(`search?part=snippet,id&q=quran`)
      fetchFromAPI(`search?part=snippet,id&q=${selectedCategory}`)
      // fetchFromAPI(`/search?part=snippet,id&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
      }, [selectedCategory]);
  
  return (
    // <div>
      <div className="row">
        <div className="col-12 col-lg-2   d-lg-block">
          <MainNavBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
        </div>
        <div className="col-11 col-lg-9 mx-auto">
           <Videos videos={videos} selectedCategory={selectedCategory} />
        </div>
      </div>
    // </div>
  );
}

export default Feed;
