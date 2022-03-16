import {
  AddCircleOutline,
  ArrowDropDown,
  Done,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToList,
  removeToList,
} from "../../../redux/myListSlice/myListSlice";

const ModalTvKidsTitle = ({ featuredKidsData }) => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.myListData.myList);
  const newList = myList.map((element) => {
    return element.id;
  });

  return (
    <div className="absolute mt-72 ml-10">
      <h1 className="text-white text-5xl w-30">{featuredKidsData.name}</h1>
      <div className="flex ">
        <Link
          to={`/tv-video/${featuredKidsData.id}`}
          className="playButtonModal"
        >
          <PlayArrow style={{ fontSize: "50px" }} />
          Play
        </Link>

        <div className="group group flex items-center justify-center">
          <div className="relative">
            {newList.includes(featuredKidsData.id) ? (
              <button
                type="button"
                className="iconesStyle ml-1 border-2 border-gray-200"
                onClick={() => dispatch(removeToList(featuredKidsData.id))}
              >
                <Done style={{ fontSize: "40px" }} />
              </button>
            ) : (
              <button
                type="button"
                className="iconesStyle ml-1"
                onClick={() =>
                  dispatch(
                    addToList({
                      poster: featuredKidsData.poster_path,
                      name: featuredKidsData.original_name,
                      id: featuredKidsData.id,
                    })
                  )
                }
              >
                <AddCircleOutline style={{ fontSize: "50px" }} />
              </button>
            )}
          </div>
          <div className="modalIcons top-0 left-20 ml-2">
            <span>
              {newList.includes(featuredKidsData.id)
                ? "Remove From My List"
                : "Add to My List"}
            </span>
            <span className="absolute text-gray-200 flex left-14 ml-3 top-4">
              <ArrowDropDown style={{ fontSize: "65px" }} />
            </span>
          </div>
        </div>

        <div className="group flex items-center justify-center">
          <div className="relative">
            <button type="button" className="iconesStyle borderThumbIcons ml-1">
              <ThumbUpAltOutlined style={{ fontSize: "30px" }} />
            </button>
          </div>
          <div className="modalIcons top-0 left-40">
            <span>I like this</span>
            <span className="absolute text-gray-200 flex left-8 ml-3 top-4">
              <ArrowDropDown style={{ fontSize: "65px" }} />
            </span>
          </div>
        </div>

        <div className="group flex items-center justify-center">
          <div className="relative">
            <button type="button" className="iconesStyle borderThumbIcons ml-2">
              <ThumbDownAltOutlined style={{ fontSize: "30px" }} />
            </button>
          </div>
          <div className="modalIcons top-0 left-50 ml-4">
            <span>Not for me</span>
            <span className="absolute text-gray-200 flex left-10 ml-3 top-4">
              <ArrowDropDown style={{ fontSize: "65px" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTvKidsTitle;
