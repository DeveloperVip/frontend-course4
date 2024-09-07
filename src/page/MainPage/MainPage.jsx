// import React from "react";
import QuizList from "../../components/Interface/Quizz/QuizList.jsx";
// import quizzes from "../../quizzes.jsx";
import "./MainPage.css";
import { FaComputer } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
// import Footer from "../../components/footer/Footer";
import { FaFilter, FaFolderOpen, FaSearch } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { SiStudyverse } from "react-icons/si";
import { useEffect, useState } from "react";
import { Dropdown } from "../../components/ToolBar/Dropdown.jsx";
import { useFetchAPILesson } from "../../hook/useFetchAPILesson.jsx";

// import Dashboard from "../../components/Dashboard/Dashboard";
// import Header from "../../components/Header/Header";

// Component tái sử dụng cho danh sách quiz
const QuizSection = ({ icon: Icon, title, quizzes }) => {
  // console.log("🚀 ~ QuizSection ~ quizzes:", quizzes);
  // const filteredQuizzes = quizzes.filter((quiz) => quiz.category === category);

  return (
    <div>
      <h2 className="pb-3 font-semibold text-dark-2 text-xl flex items-center gap-4">
        <Icon className="flex justify-center" />
        {title}
      </h2>
      <QuizList quizzes={quizzes} />
    </div>
  );
};

function MainPage() {
  const [selectedFilter, setSelectedFilter] = useState("Tất cả");
  const [keyword, setKeyword] = useState("");
  const [filterOptions, setFilterOptions] = useState(["Tất cả"]);
  const { allLesson } = useFetchAPILesson(keyword, selectedFilter);
  // console.log("🚀 ~ MainPage ~ allLesson:", keyword);

  // removeQueryParameter("token");

  const handleFilterSelect = (filter) => {
    // console.log("🚀 ~ handleFilterSelect ~ filter:", filter);
    setSelectedFilter(filter);
    // Handle filter change logic here
  };
  const groupedLessons = allLesson.reduce((acc, lesson) => {
    const topicName = lesson?.topic?.name;
    if (!acc[topicName]) {
      // console.log(topicName);

      acc[topicName] = [];
    }
    acc[topicName].push(lesson);
    return acc;
  }, {});
  // console.log("🚀 ~ groupedLessons ~ groupedLessons:", groupedLessons);
  useEffect(() => {
    const newFilterOptions = ["Tất cả", ...Object.keys(groupedLessons)];
    // console.log(
    //   "🚀 ~ useEffect ~ newFilterOptions:",
    //   !filterOptions.includes(selectedFilter)
    // );

    if (newFilterOptions.length > filterOptions.length) {
      setFilterOptions(newFilterOptions);
    }
  }, [groupedLessons]);

  return (
    <div className="flex font-bold ">
      {/* <Dashboard /> */}
      <div
        className="h-screen text-black bg-gray-50 flex-1 "
        style={{ height: "fit-content" }}
      >
        <div className="bg-purple-200 p-3 px-10">
          <h1 className="text-dark-80% font-semibold flex flex-col items-center text-center mt-24">
            <span className="text-xl">
              Hi {localStorage.getItem("userName")} 👋
            </span>
            <span className="text-2xl">Chúng ta học gì hôm nay ?</span>
          </h1>
          <div className="flex justify-center items-center ">
            <div className="w-3/5 mt-4 z-30 relative ">
              <div className="absolute h-full flex items-center ml-5 ">
                <FaSearch />
              </div>
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setKeyword(e.currentTarget.value);
                  }
                }}
                placeholder="Tìm kiếm quiz về bất kỳ chủ đề nào"
                className="w-full h-16 bg-white text-black pl-14 rounded-full shadow-2xl "
              ></input>
            </div>
          </div>
        </div>
        <div className="w-full p-4 md:px-32 md:py-6 h-fit md:mx-auto flex justify-end">
          <div className="w-2/12 ">
            <Dropdown
              title={selectedFilter}
              icon={<FaFilter style={{ fontSize: 12 }} />}
              options={filterOptions}
              onOptionSelect={handleFilterSelect}
            />
          </div>
        </div>
        <div className="w-full p-4 md:px-32 md:py-6 h-fit md:mx-auto">
          {Object.entries(groupedLessons).map(([topicName, lessons]) => (
            <QuizSection
              key={topicName}
              icon={
                topicName === "Toán"
                  ? BiMath
                  : topicName === "Tiếng Anh và Ngôn ngữ"
                  ? MdLanguage
                  : topicName === "Khám phá thiên nhiên "
                  ? SiStudyverse
                  : topicName === "Khoa học máy tính và kỹ năng"
                  ? FaComputer
                  : FaFolderOpen
              } // Có thể thay đổi icon dựa trên chủ đề nếu cần thiết
              title={topicName} // Sử dụng `topic.name` làm `title`
              category={topicName} // Sử dụng `topic.name` làm `category`
              quizzes={lessons} // Truyền các bài học (lesson) đã được nhóm vào `quizzes`
            />
          ))}
          {/* <QuizSection
            icon={FaFolderOpen}
            title="Khởi động vui vẻ"
            category="Khởi động vui vẻ"
          />
          <QuizSection icon={BiMath} title="Toán" category="Toán" />
          <QuizSection
            icon={MdLanguage}
            title="Tiếng Anh và Ngôn ngữ"
            category="Tiếng Anh và Ngôn ngữ"
          />
          <QuizSection
            icon={SiStudyverse}
            title="Khoa học"
            category="Khoa học"
          />
          <QuizSection
            icon={FaComputer}
            title="Khoa học máy tính và kỹ năng"
            category="Khoa học máy tính và kỹ năng"
          /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MainPage;
