import React from "react";

const ItemLesson = () => {
  return (
    <div className="w-full md:w-80 p-1 rounded hover:bg-dark-6 bg-light-3 border-dark-10%">
      <a
        href="/admin/quiz/5e7ffdf1bf0c1c001b3b8136/thu-thach-toan-hoc?isSuperRecommeded=false"
        className="relative flex cursor-pointer"
        data-testid="qp-quiz-recommend-desktop-0"
        rel="nofollow"
      >
        <div className="absolute bottom-0 flex items-center p-1 right-2"></div>
        <div className="relative rounded-lg image-exists">
          <div className="w-full h-full v-image">
            <img
              data-testid
              className="lazy-img rounded-inherit object-contain w-20 h-20 rounded-lg min-w-20"
              alt="Quiz image"
              lazy="loaded"
              src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/6179df41-19e0-4a50-937f-4b6694f83711?w=90&h=90"
            />
          </div>
          <h6 className="absolute bottom-2 right-2 text-xxs text-light-3 bg-dark-80% rounded px-1">
            10 Qs{" "}
          </h6>
        </div>
        <div className="flex flex-col mx-2">
          <h5 className="text-sm font-semibold text-dark-3">
            THỬ THÁCH TOÁN HỌC
          </h5>
          <h6 className="text-xs font-semibold text-dark-3">27.5K plays</h6>
          <h6 className="flex">
            <span className="text-xxs text-dark-4">KG</span>
          </h6>
        </div>
      </a>
    </div>
  );
};

export default ItemLesson;
