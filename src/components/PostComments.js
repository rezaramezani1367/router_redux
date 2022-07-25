import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostComments } from "../action";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

function PostComments() {
  const { postId } = useParams();
  const {
    state: { title },
  } = useLocation();
  const { comments, loading } = useSelector((state) => state.myState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPostComments(postId));
  }, []);
  //   console.log(postId);
  //   console.log(title);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <div className="text-center font-bold border-b p-2 mx-2 text-2xl ">
        <span className="text-blue-800">{title} </span>
      </div>
      <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {comments.map((item) => {
          return (
            <div key={item.id}>
              <div className="border overflow-hidden rounded-xl mx-1 hover:bg-slate-50 hover:text-red-600 h-full">
                <p className="p-2  cursor-pointer font-bold text-center">
                  {item.id} -{item.name}
                </p>
                <hr />
                <p className="p-2">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostComments;
