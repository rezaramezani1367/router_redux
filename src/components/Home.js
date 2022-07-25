import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  getUsers, searchComments } from "../action";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Home() {
  const [text, setText] = useState("");
  const { users, comments,loading } = useSelector((state) => state.myState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsers());
    // dispatch(searchComments(""));
  }, []);
  
  if (loading) {
    return (
      <Loading/>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  justify-center ">
      <div className="md:border-r order-2">
        <div className="text-center font-bold border p-2 mx-2 shadow-sm text-2xl">
          Users
        </div>

        {users.map((item) => {
          return (
            <p
              className="hover:text-red-800 cursor-pointer text-xl mx-2 py-1 px-4 transition-all duration-150 "
              key={item.id}
              onClick={()=>{navigate(`/users/${item.id}/posts`,{state :item});}}
            >
              {item.id} ) {item.name}
            </p>
          );
        })}
      </div>
      <div className="mb-2 md:mb-0 border-b pb-2 md:pb-0 md:border-b-0  md:order-2 ">
        <form
          className="mx-2 my-1 shadow-sm flex "
          onSubmit={(e) => {
            e.preventDefault();
            if((text.trim().length)){

              dispatch(searchComments(text));
            }
          }}
        >
          <input
            className="p-2 border outline-none flex-grow w-24 placeholder:text-base  placeholder:m-0"
            placeholder="search in comments ..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="button"
            className="p-2 btn"
            onClick={() => {
              if((text.trim().length)){

                dispatch(searchComments(text));
              }
            }}
          >
            Search
          </button>
        </form>
        <div className="m-3 grid grid-cols-2 gap-1 h-96 overflow-auto">
          {comments.map((item) => {
            return (
              <div key={item.id}>
                <div className="border overflow-hidden rounded-xl mx-1 hover:bg-slate-50 hover:text-red-600">
                  <p className="p-2  cursor-pointer  ">
                    {item.id} -{item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
