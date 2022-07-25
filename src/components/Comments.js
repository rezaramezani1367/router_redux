import React, { useEffect } from "react";
import { getComments } from "../action";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";

function Comments() {
  const { comments, loading } = useSelector((state) => state.myState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);
  // console.log(comments);

  if (loading) {
    return <Loading />;
  }
  return (
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
  );
}

export default Comments;
