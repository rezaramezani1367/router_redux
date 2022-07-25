import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts } from "../action";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

function UserPosts() {
  const { userId } = useParams();
  const {
    state: { name, email },
  } = useLocation();
  const { posts, loading } = useSelector((state) => state.myState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserPosts(userId));
  }, []);
  //   console.log(userId);
  //   console.log(location);

  if (loading) {
    return (
      <Loading/>
    );
  }
  return (
    <div className="">
      <div className="text-center font-bold border-b p-2 mx-2 text-2xl ">
        <span className="text-blue-800">{name} </span>||{" "}
        <span className="text-blue-800">{email}</span>
      </div>

      <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {posts.map((item) => {
          return (
            <div key={item.id}>
              <div className="border overflow-hidden rounded-xl mx-1 hover:bg-slate-50 hover:text-red-600 h-full" 
              onClick={()=>{navigate(`/posts/${item.id}/comments`,{state:item})}}
              >
                <p className="p-2  cursor-pointer font-bold text-lg text-center">
                  {item.title}
                </p>
                <hr />
                <p className="p-2">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserPosts;
