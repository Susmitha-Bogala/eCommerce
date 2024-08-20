//  https://jsonplaceholder.typicode.com/users -- url

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "./redux/userData/actionCreator";

const UserList = () => {
  const { data, isLoading, error } = useSelector((state) => {
    return state.key1;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        data.map((userDetails) => {
          return (
            <div>
              <p>{userDetails.username}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserList;
