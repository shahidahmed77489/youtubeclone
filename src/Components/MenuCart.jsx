import React, { useEffect } from "react";
import { fetchYoutubeVideos } from "../Utils/youtubeVideoesSlice";
import { useDispatch, useSelector } from "react-redux";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { fetchPlayingVideos } from "../Utils/playingVideosSlice";

const MenuCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { youtubeContent } = useSelector((state) => state.youtubeVideosData);

  useEffect(() => {
    dispatch(fetchYoutubeVideos());
  }, []);
  const clickHandler = (id) => {
    navigate(`/videoplaying/${id}`);
    dispatch(fetchPlayingVideos(id));
  };
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center px-2">
        {youtubeContent?.data?.items?.map((item) => {
          return (
            <>
              <div className="w-[380px]" onClick={() => clickHandler(item.id)}>
                <img
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="error"
                  className="rounded w-full"
                />
                <p className="font-semibold">
                  {item?.snippet?.title?.slice(0, 35)}...
                </p>
                <p className="italic">{item?.snippet?.channelTitle}</p>
                <p className="text-[12px] font-semibold flex items-center gap-1 text-redd">
                  <span>
                    <LuEye />
                  </span>
                  <span>
                    {1000000 < item?.statistics?.viewCount
                      ? `${Math.floor(
                          item?.statistics?.viewCount / 1000000
                        )}m views`
                      : `${Math.floor(
                          item?.statistics?.viewCount / 1000
                        )}k views`}
                  </span>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuCart;
