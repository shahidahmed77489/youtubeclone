import React from "react";
import SideBar from "../../Components/SideBar";
import {
  FaRegUser,
  FaMusic,
  FaHistory,
  FaHome,
  FaTrophy,
  FaLightbulb,
  FaYoutube,
} from "react-icons/fa";
import { FcCopyright } from "react-icons/fc";
import {
  FaPlay,
  FaFire,
  FaRegCirclePlay,
  FaSackDollar,
  FaGreaterThan,
  FaRegNewspaper,
  FaShieldHeart,
  FaPodcast,
} from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { PiBroadcastFill } from "react-icons/pi";
import { GiShoppingBag } from "react-icons/gi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoGameController, IoSettingsOutline } from "react-icons/io5";
import { SiYoutubemusic, SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdFeedback, MdOutlineReportGmailerrorred } from "react-icons/md";
///
import aajtak from "../../Assets/Aaj_tak_logo.png";
import ndtv from "../../Assets/947e405ff7b832e61e4c1de5913f51a3.png";
import lallantop from "../../Assets/lallantop.jpg";
import news from "../../Assets/news24.jpg";
import sony from "../../Assets/sonyliv.png";
import dhruv from "../../Assets/dhruv rathee.jpg";
import round from "../../Assets/round2hell.jpg";
import carryminati from "../../Assets/carryminati.jpg";
import tseries from "../../Assets/t-series.png";

const SideBarContent = () => {
  return (
    <>
      <div>
        <SideBar list={"Home"} icon={<FaHome />} />
        <SideBar list={"Shorts"} icon={<FaRegCirclePlay />} />
        <SideBar list={"Subscriptions"} icon={<FaSackDollar />} />
      </div>
      <hr />
      <div>
        <h2 className="flex items-center gap-2 font-semibold">
          <span>You</span>
          <span>
            <FaGreaterThan />
          </span>
        </h2>
        <SideBar list={"Your Channel"} icon={<FaRegUser />} />
        <SideBar list={"History"} icon={<FaHistory />} />
        <SideBar list={"Your Videos"} icon={<FaPlay />} />
        <SideBar list={"Liked Videos"} icon={<AiFillLike />} />
      </div>
      <hr />
      <div>
        <h2 className="flex items-center gap-2 font-semibold">Subscriptions</h2>
        <SideBar
          list={"Aaj Tak"}
          icon={<img src={aajtak} alt="aaj tak " />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"NDTV India"}
          icon={<img src={ndtv} alt="ndtv " />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"The LallanTop"}
          icon={<img src={lallantop} alt="lallantop" />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"News 24"}
          icon={<img src={news} alt="news24" />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"Sony Liv"}
          icon={<img src={sony} alt="sonyliv" />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"Dhruv Rathee"}
          icon={<img src={dhruv} alt="dhruvrathee" />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"Round2Hell"}
          icon={<img src={round} alt="round2hell" />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"CarryMinati"}
          icon={<img src={carryminati} alt="carryminati" />}
          network={<PiBroadcastFill />}
        />
        <SideBar
          list={"T-Series"}
          icon={<img src={tseries} alt="tseries" />}
          network={<PiBroadcastFill />}
        />
      </div>
      <hr />
      <div>
        <h2 className="flex items-center gap-2 font-semibold">Explore</h2>
        <SideBar list={"Trending"} icon={<FaFire />} />
        <SideBar list={"Shopping"} icon={<GiShoppingBag />} />
        <SideBar list={"Music"} icon={<FaMusic />} />
        <SideBar list={"Movies"} icon={<BiSolidMoviePlay />} />
        <SideBar list={"Live"} icon={<PiBroadcastFill />} />
        <SideBar list={"Gaming"} icon={<IoGameController />} />
        <SideBar list={"News"} icon={<FaRegNewspaper />} />
        <SideBar list={"Sports"} icon={<FaTrophy />} />
        <SideBar list={"Learning"} icon={<FaLightbulb />} />
        <SideBar list={"Fashion & Beauty"} icon={<FaShieldHeart />} />
        <SideBar list={"Podcasts"} icon={<FaPodcast />} />
      </div>
      <hr />
      <div>
        <h2 className="flex items-center gap-2 font-semibold">
          More from YouTube
        </h2>
        <SideBar list={"YouTube Premium"} icon={<FaYoutube />} color="redd" />
        <SideBar
          list={"YouTube Studio"}
          icon={<SiYoutubestudio />}
          color="redd"
        />
        <SideBar
          list={"YouTube Music"}
          icon={<SiYoutubemusic />}
          color="redd"
        />
        <SideBar
          list={"YouTube Kid"}
          icon={<TbBrandYoutubeKids />}
          color="redd"
        />
      </div>
      <div>
        <SideBar list={"Setting"} icon={<IoSettingsOutline />} />
        <SideBar
          list={"Report History"}
          icon={<MdOutlineReportGmailerrorred />}
        />
        <SideBar list={"Help"} icon={<IoMdHelpCircleOutline />} />
        <SideBar list={"Send Feedback"} icon={<MdFeedback />} />
      </div>
      <div className="text-gray-500 font-semibold">
        <p>
          About Press Copyright Contact us Creator Advertise Developers <br />
          <br /> Terms Privacy Policy & SafetyHow YouTube worksTest new features
        </p>
        <p className="flex items-center gap-2">
          <span>
            <FcCopyright />
          </span>
          <span>Shahid Ahmed</span>
        </p>
      </div>
    </>
  );
};

export default SideBarContent;
