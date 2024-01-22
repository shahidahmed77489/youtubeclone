import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPlayingVideos } from "../../Utils/playingVideosSlice";

const SearchMoviesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchContent } = useSelector((state) => state.searchVideosData);
  const param = useParams();
  console.log(param);

  const playingBtn = (id) => {
    dispatch(fetchPlayingVideos(id));
    navigate(`/videoplaying/${id}`);
  };
  return (
    <div className="mx-auto max-w-[90%] md:max-w-[70%]">
      {searchContent?.data?.items.map((item) => {
        return (
          <>
            <div
              className="flex md:flex-nowrap flex-wrap gap-2 my-4"
              onClick={() => playingBtn(item.id.videoId)}
            >
              <div className="md:w-[35%] w-full">
                <img
                  className="rounded"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="error"
                />
              </div>
              <div className="md:w-[35%] w-full mt-3">
                <h2 className="font-semibold md:text-xl">
                  {item?.snippet?.title}
                </h2>
                <p>{item?.snippet?.channelTitle}</p>
                <p>{item?.snippet?.publishTime.slice(0, 10)}</p>
                <p className="text-gray-500 text-sm">
                  {item?.snippet?.description}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SearchMoviesPage;
