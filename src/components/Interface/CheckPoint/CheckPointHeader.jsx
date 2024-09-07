import React from "react";
import { FaQuestionCircle, FaRegCheckCircle, FaBullseye, FaUsers } from "react-icons/fa";

const StatBox = ({ icon: Icon, label, value, tooltip }) => (
  <div className="stat-box-item h-18 flex flex-row items-center border-x border-y border-slate-300 rounded-lg flex-1 p-3">
    <div className="section-icon bg-slate-300 rounded flex justify-center items-center mr-3 h-12 w-12">
      <Icon className="text-dark-2 text-base font-normal" style={{ fontSize: 18 }} />
    </div>
    <div className="section-data flex flex-col items-start space-y-1">
      <span className="section-label text-xs text-dark-4 font-semibold whitespace-nowrap">
        <span>{label}</span>
        {tooltip && (
          <div className="show-tt-container text tt-hover tt-theme-white hidden" tabIndex={-1}>
            <i className="fa-regular fa-circle-info ml-2 cursor-pointer" style={{ fontSize: 12 }} />
            <div className="tt-content z-100 tt-pos-right tt-theme-white tt-size-md">
              <div className="flex flex-col w-50 hidden">
                <span className="text-dark-2 leading-normal text-xs text-left">{tooltip}</span>
                <div className="lozenge items-center inline-flex text-tn font-semibold rounded px-1 bg-dark-10% text-dark-2 mt-2 w-max">
                  <span>Based on best attempt report</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </span>
      <div className="section-value flex flex-row space-x-4">
        <span className="accuracy-value font-bold text-dark-2 text-xl">{value}</span>
      </div>
    </div>
  </div>
);

const CheckPointHeader = ({history = {},score , wrongAnswer , correctAnswer}) => {
  const {quiz} = history
  // console.log(quiz);
  // console.log(quiz?.question?.length);
  // const totalScore = quiz?.question?.reduce((accumulator, item) => {
  //   return accumulator + item.point;
  // }, 0);
  // console.log(quiz?.point);
  
  return (
    <div className="relative w-full h-fit pt-0 md:pt-0 p-4 md:p-8 sticky top-2">
    <div className="bg-white stats-box-items py-4 w-full flex flex-row items-center flex-wrap px-6 gap-x-4 gap-y-2 rounded-lg">
      <StatBox
        icon={FaBullseye}
        label="Chính xác"
        value={`${Math.round(score / quiz?.point * 100)} %`}
        tooltip="Accuracy = Total points gained by class for correct & partial correct answers / (Total points for the quiz x number of students)."
      />
      <StatBox
        icon={FaRegCheckCircle}
        label="Tỉ lệ hoàn thành"
        value={`${Math.floor((wrongAnswer+correctAnswer)/quiz?.question?.length*100)} %`}
        tooltip="Completion rate = Total questions attempted by class / (Total questions x number of students)."
      />
      <StatBox
        icon={FaUsers}
        label="Tổng học sinh"
        value="1"
      />
      <StatBox
        icon={FaQuestionCircle}
        label="Tổng câu hỏi"
        value={`${quiz?.question?.length}`}
      />
    </div>

    </div>
  );
};

export default CheckPointHeader;
