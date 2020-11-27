import React from "react";
import { useSelector } from "react-redux";

import Navbar from "components/Navbar";

const Operation = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      {userData.isAuth ? (
        <div>operation</div>
      ) : (
        <div>로그인 후 이용해주세요</div>
      )}
    </>
  );
};

export default Operation;
