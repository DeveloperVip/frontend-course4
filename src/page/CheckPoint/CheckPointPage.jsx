import React from "react";
import CheckPointHeader from "../../components/Interface/CheckPoint/CheckPointHeader.jsx";
import CheckPointItem from "../../components/Interface/CheckPoint/CheckPointItem.jsx";

const CheckPointPage = () => {
  return (
    <div className="flex flex-col">
      <CheckPointHeader />
      <CheckPointItem />
      <CheckPointItem />
      <CheckPointItem />
      <CheckPointItem />
      <CheckPointItem />
      <CheckPointItem />
      <CheckPointItem />
      <div className="flex gap-7 m-auto " style={{width:"fit-content"}}>
      <button className="bg-green-500 text-white m-auto mb-10 uppercase">
        Làm lại
      </button>
      <button className="bg-green-500 text-white m-auto mb-10 uppercase">
        Thoát
      </button>
      </div>
    </div>
  );
};

export default CheckPointPage;
