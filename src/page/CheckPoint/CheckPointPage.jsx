import React from "react";
import CheckPointHeader from "../../components/Interface/CheckPoint/CheckPointHeader.jsx";
import CheckPointItem from "../../components/Interface/CheckPoint/CheckPointItem.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchAPIHistoryById } from "../../hook/useFetchAPIHistory.jsx";

const CheckPointPage = () => {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate()
  const { history } = useFetchAPIHistoryById(id);
  const dataHistory = history;
  // console.log("🚀 ~ CheckPointPage ~ dataHistory:", dataHistory)

  return (
    <div className="flex flex-col">
      <CheckPointHeader
        history={dataHistory}
        score={dataHistory?.point}
        correctAnswer={dataHistory?.correctAnswer}
        wrongAnswer={dataHistory?.wrongAnswer}
      />
      {dataHistory?.quiz?.question?.map((item, index) => (
        <CheckPointItem
          allAnswersSelected={dataHistory?.allAnswersSelected}
          key={index}
          question={item}
          number={index + 1}
        />
      ))}
      <div className="flex gap-7 m-auto mb-10" style={{ width: "fit-content" }}>
        <button className="bg-green-500 text-white uppercase px-4 py-2">
          Làm lại
        </button>
        <button className="bg-green-500 text-white uppercase px-4 py-2" onClick={()=>navigate(-1)}>
          Thoát
        </button>
      </div>
    </div>
  );
};

export default CheckPointPage;
