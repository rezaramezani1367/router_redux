import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, searchComments } from "../action";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Users() {
  const { users,loading } = useSelector((state) => state.myState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="text-center font-bold border-b p-2 mx-2 text-2xl ">
        Users
      </div>
      <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {users.map((item) => {
          return (
            <div key={item.id}>
              <div className="border overflow-hidden rounded-xl mx-1 hover:bg-slate-50 hover:text-red-600 h-full">
                <p
                  className="p-2  cursor-pointer font-bold text-lg "
                  onClick={() => {
                    navigate(`/users/${item.id}/posts`, { state: item });
                  }}
                >
                  {item.name}
                </p>
                <hr />
                <p className="p-2">
                  <span className="font-bold">Email:</span>
                  {item.email}
                </p>
                <p className="p-2">
                  <span className="font-bold">address:</span>
                  {item.address.city}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default Users;
