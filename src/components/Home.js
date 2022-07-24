import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../action";
import { useNavigate } from "react-router-dom";

function Home() {
  const { data } = useSelector((state) => state.myState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  // console.log(data);
  return (
    <div className="grid grid-cols-2  justify-center ">
      <div className="border-r">
      <div className="text-center font-bold border-b pb-2 mx-2 shadow-sm text-2xl">Users</div>

        {data.map((item) => {
          return (
            <p className="hover:text-red-800 cursor-pointer text-xl mx-2 py-1 px-4 transition-all duration-150 " key={item.id}>
              {item.id} ) {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
