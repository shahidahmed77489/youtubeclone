import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import channelLogo from "../../Assets/channel-logo.png";
import { FaBell } from "react-icons/fa";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { useParams } from "react-router-dom";
import { fetchPlayingVideos } from "../../Utils/playingVideosSlice";

const PlayingPage = () => {
  const [isDetails, setDetails] = useState(true);
  const [isEnd, setEnd] = useState(100);
  const { playingVideosContent } = useSelector(
    (state) => state.playingVideosData
  );
  const param = useParams();
  const dispatch = useDispatch();
  const detailsBtn = () => {
    isDetails ? setEnd(5000) : setEnd(100);
    setDetails(!isDetails);
  };

  useEffect(() => {
    if (param?.id) {
      dispatch(fetchPlayingVideos(param?.id));
    }
  }, [isEnd]);
  let storeContent = playingVideosContent?.data?.items[0];
  return (
    <div className="md:mx-8 mx-1">
      <div className="w-100%  h-[300px] md:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${storeContent?.id}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:w-3/4 w-full">
        <p className="md:text-2xl font-semibold text-xl">
          {storeContent?.snippet?.title}
        </p>
        <div className="flex md:flex-nowrap flex-wrap justify-between my-5">
          <div className="flex  items-center gap-6">
            <img src={channelLogo} alt="error" className="w-8" />
            <div>
              <h2 className="md:text-xl font-semibold">
                {storeContent?.snippet?.channelTitle}
              </h2>
              <p className="text-gray-400 cursor-pointer">subscribers</p>
            </div>
            <button className="flex items-center gap-1 bg-gray-100 px-1 rounded">
              <FaBell />
              <p> Subscribed</p>
            </button>
            {/* <h2>{storeContent?.snippet?.localized?.description}</h2> */}
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 bg-gray-100 px-1 rounded">
              <BiSolidLike />
              {Math.floor(storeContent?.statistics?.likeCount / 1000)}k
              <p>Likes</p>
              <BiSolidDislike />
            </button>
            <button className="flex items-center gap-1 bg-gray-100 px-1 rounded">
              <FaShare />
              <p>Shares</p>
            </button>
            <button className="flex items-center gap-1 bg-gray-100 px-1 rounded">
              <IoMdDownload />
              <p>Download</p>
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <p>{storeContent?.statistics?.viewCount} views</p>
          <p>{storeContent?.snippet?.publishedAt} </p>
          <p>
            {storeContent?.snippet?.tags.slice(0, 4).map((item) => {
              return (
                <>
                  <span className="text-blue-700  md:text-xl font-semibold">
                    #{item}
                  </span>
                </>
              );
            })}
          </p>
          <p>{storeContent?.snippet?.description.slice(0, isEnd)}</p>
          <button className="font-semibold" onClick={detailsBtn}>
            {isDetails ? "more..." : "less...."}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlayingPage;
