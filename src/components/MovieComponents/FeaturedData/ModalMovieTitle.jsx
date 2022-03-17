import { ArrowDropDown } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Circle from "../../../images/circle.svg";
import Check from "../../../images/check.svg";
import ThumbUp from "../../../images/thumbs-up.svg";
import ThumbUpWhite from "../../../images/thumbs-up-white.svg";
import ThumbDown from "../../../images/thumbs-down.svg";
import ThumbDownWhite from "../../../images/thumbs-down-white.svg";
import Play from "../../../images/play.svg";
import {
  addToList,
  removeToList,
} from "../../../redux/myListSlice/myListSlice";
import { setDisLike, setLike } from "../../../redux/homeSlice/homeSlice";

const ModalMovieTitle = ({ featuredMovieData }) => {
  const dispatch = useDispatch();
  const like = useSelector((state) => state.homeData.like);
  const disLike = useSelector((state) => state.homeData.disLike);
  const myList = useSelector((state) => state.myListData.myList);
  const newList = myList.map((element) => {
    return element.id;
  });

  const likeHandler = () => {
    dispatch(setLike(!like));
    dispatch(setDisLike(false));
  };

  const disLikeHandler = () => {
    dispatch(setDisLike(!disLike));
    dispatch(setLike(false));
  };

  return (
    <div className="absolute mt-24 ml-5 xl:ml-10 xl:mt-56">
      <h1 className=" text-white mb-5 text-lg md:text-2xl lg:text-3xl xl:w-40 xl:text-5xl xl:mb-5">
        {featuredMovieData.title}
      </h1>
      <div className="flex">
        <div className="playButtonModal mb-1 xl:py-2">
          <img src={Play} alt="play" width="28" />
          <Link to={`/tv-video/${featuredMovieData.id}`}>Play</Link>
        </div>
        <div className="group flex items-center justify-center">
          <div className="relative">
            {newList.includes(featuredMovieData.id) ? (
              <button
                type="button"
                aria-label="remove to my list"
                className="iconesStyle ml-1  border-gray-200"
                onClick={() => dispatch(removeToList(featuredMovieData.id))}
              >
                <img src={Check} alt="check" width="36" />
              </button>
            ) : (
              <button
                type="button"
                aria-label="add to my list"
                className="iconesStyle ml-1"
                onClick={() =>
                  dispatch(
                    addToList({
                      poster: featuredMovieData.poster_path,
                      name: featuredMovieData.original_title,
                      id: featuredMovieData.id,
                    })
                  )
                }
              >
                <img src={Circle} alt="circle" width="36" />
              </button>
            )}
          </div>
          <div className="modalIcons text-xs w-56 -top-0 ml-1 xl:text-base xl:top-3 xl:left-18">
            <span>
              {newList.includes(featuredMovieData.id)
                ? "Remove From My List"
                : "Add to My List"}
            </span>
            <span className="absolute left-20 top-1  text-gray-200 flex xl:top-3 xl:left-18">
              <ArrowDropDown style={{ fontSize: "65px" }} />
            </span>
          </div>
        </div>

        <div className="group flex items-center justify-center">
          <div className="relative">
            <button
              type="button"
              aria-label="like"
              className="iconesStyle borderThumbIcons ml-2 mb-2"
              onClick={likeHandler}
            >
              <img
                src={like ? ThumbUpWhite : ThumbUp}
                alt="circle"
                width="24"
              />
            </button>
          </div>
          <div className="modalIcons text-xs w-36 -top-0 xl:top-3 xl:left-30 xl:ml-4 xl:w-44 xl:text-base">
            {like ? <span>Rated</span> : <span>I like this</span>}
            <span className="absolute text-gray-200 flex left-8 ml-3 top-1 xl:top-3 xl:left-10">
              <ArrowDropDown style={{ fontSize: "65px" }} />
            </span>
          </div>
        </div>

        <div className="group flex items-center justify-center">
          <div className="relative">
            <button
              type="button"
              aria-label="dislike"
              className="iconesStyle borderThumbIcons ml-2 mb-2"
              onClick={disLikeHandler}
            >
              <img
                src={disLike ? ThumbDownWhite : ThumbDown}
                alt="circle"
                width="24"
              />
            </button>
          </div>
          <div className="modalIcons text-xs w-36 -top-0 left-46 ml-2 xl:top-3 xl:ml-4 xl:w-44 xl:text-base">
            {disLike ? <span>Rated</span> : <span>Not for me</span>}
            <span className="absolute text-gray-200 flex left-8 ml-3 top-1 xl:top-3 xl:left-10">
              <ArrowDropDown style={{ fontSize: "65px" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMovieTitle;
