import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../global/Api";
// import YoutubeCard from "./youtubeCard";
// import SkeltonEffect from "./SkeltonEffectVideoCard";
import {SkeltonForVideoPlayer,SkeltonEffect,YoutubeCard, VideoPlayer} from "./allComponent";

function VideoDetaiels() {
  const { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [Load, setLoad] = useState(true)
  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoad(false)
    }, 3500);
     
    setLoad(true)
  
    
  }, [id]);

  const getData = async () => {
    const related = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&maxResults=5`);
    setRelatedVideos(related);
  };
  return (
    <div className="container-fluid  videoDetaiels">
      <div className="row">
        <div className="col-12  col-lg-9">
          {

  Load? <SkeltonForVideoPlayer/>:<VideoPlayer/>
          }
        </div>


        <div className="col-12 col-lg-3 row  relatedVideo "  >
          {/* {console.log(relatedVideos)} */}
          {relatedVideos?.items?.map((ele,index)=><div className="col-12 col-md-4 col-lg-12">{Load?<SkeltonEffect key={index}/>:<YoutubeCard video={ele}/>}</div>)}
        </div>
      </div>
    </div>
  );
}

export default VideoDetaiels;

// {



// snippet
// : 
// categoryId
// : 
// "22"
// channelId
// : 
// "UC-L0cMpg7CpWUZosYKVfUZw"
// channelTitle
// : 
// "Quran karim"
// description
// : 
// "Please watch and share the following video: https://youtube.com/channel/UCGfmSInT5-bvI4p6ffBSnKg?sub_confirmation=1\n\n@adam-islam \n\n\nListen to full Quran\nSurah al Baqarah, full by Alafasy High Quality (HD) - QURAN\nسورة البقره كامله بصوت القارئ مشاري العفاسي‎ - \n\n1. Alif-Lam-Mim. [These letters are one of the miracles of the Qur'an and none but Allah (Alone) knows their meanings].\n\n2. This is the Book (the Qur'an), whereof there is no doubt, a guidance to those who are Al-Muttaqun [the pious and righteous persons who fear Allah much (abstain from all kinds of sins and evil deeds which He has forbidden) and love Allah much (perform all kinds of good deeds which He has ordained)].\n\n3. Who believe in the Ghaib and perform As-Salat (Iqamat-as-Salat), and spend out of what we have provided for them [i.e. give Zakat , spend on themselves, their parents, their children, their wives, etc., and also give charity to the poor and also in Allah's Cause - Jihad, etc.].\n\n4. And who believe in (the Qur'an and the Sunnah) which has been sent down (revealed) to you (Muhammad Peace be upon him ) and in [the Taurat (Torah) and the Injeel (Gospel), etc.] which were sent down before you and they believe with certainty in the Hereafter. (Resurrection, recompense of their good and bad deeds, Paradise and Hell, etc.).\n\n5. They are on (true) guidance from their Lord, and they are the successful.\n\n6. Verily, those who disbelieve, it is the same to them whether you (O Muhammad Peace be upon him ) warn them or do not warn them, they will not believe.\n\n7. Allah has set a seal on their hearts and on their hearings, (i.e. they are closed from accepting Allah's Guidance), and on their eyes there is a covering. Theirs will be a great torment.\n\n8. And of mankind, there are some (hypocrites) who say: \"We believe in Allah and the Last Day\" while in fact they believe not.\n\n9. They (think to) deceive Allah and those who believe, while they only deceive themselves, and perceive (it) not!\n\n10. In their hearts is a disease (of doubt and hypocrisy) and Allah has increased their disease. A painful torment is theirs because they used to tell lies.\n\ntag: al baqara, koran, hd, online quran, download quran free, what is islam, baqarah, quran in, quran and quran, about al quran, quran mp3, quran audi, quran with, coran, alquran, koran.\n\n\nNote:-\n• I humbly request anyone submitting a copyright claim to please message me first before contacting YouTube\nEmail - qurankarimhdofficial@gmail.com\n\n• This channel doesn't Support & Advocate any unlawful activity towards any individual or community. no music was used in our productions"
// liveBroadcastContent
// : 
// "none"
// localized
// : 
// {title: 'SURAH AL BAQARAH full by Mishary Alafasy [HD] - QURAN', description: 'Please watch and share the following video: https:…r community. no music was used in our productions'}
// publishedAt
// : 
// "2012-11-09T08:14:59Z"
// tags
// : 
// (24) ['al baqara', 'Koran', 'hd', 'سورة', 'البقرة', 'سورة البقرة', 'quran', 'quran online', 'download quran free', 'islam', 'hadith', 'the quran', 'القران', 'الكريم', 'quran kareem', 'baqarah', 'quran in', 'quran and quran', 'about al quran', 'quran audi', 'what is quran', 'quran with', 'coran', 'alquran']
// thumbnails
// : 
// {default: {…}, medium: {…}, high: {…}, standard: {…}}
// title
// : 
// "SURAH AL BAQARAH full by Mishary Alafasy [HD] - QURAN"
// [[Prototype]]
// : 
// Object
// statistics
// : 
// {viewCount: '18676156', likeCount: '143460', favoriteCount: '0', commentCount: '12239'}
