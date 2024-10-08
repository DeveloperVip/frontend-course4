// import React from 'react'
import { FaBook, FaCamera, FaGraduationCap, FaShare } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import EditProfile from "./EditProfile.jsx";
import MemeProfile from "./MemeProfile.jsx";
import LibraryProfile from "./LibraryProfile.jsx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GetInforUserContext } from "../../contexts/user/GetInforUserContext.jsx";
import CollectionPage from "../../page/CollectionPage/CollectionPage.jsx";
import { ProfileContext } from "../../contexts/profile/profileContext.jsx";
import { APIUpload } from "../../services/API/APIUpload.jsx";
import { QuizContext } from "../../contexts/quiz/quizContext.jsx";
import { useFetchAPILessonByUser } from "../../hook/useFetchAPILesson.jsx";

const InterfaceProfile = () => {
  const { allLessonByUser } = useFetchAPILessonByUser();
  const { profile } = useContext(ProfileContext);
  const { questions } = useContext(QuizContext);
  // console.log("🚀 ~ InterfaceProfile ~ profile:", profile);
  const { email } = useContext(GetInforUserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log("🚀 ~ InterfaceProfile ~ isModalOpen:", isModalOpen)
  const [selectedImage, setSelectedImage] = useState(
    profile?.avatar?.secure_url
  );
  const [change, setChange] = useState(0);
  const arrayTitle = ["Thư viện", "Bộ sưu tập", "Bộ Meme"];
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileData = new FormData();
      fileData.append("file", file);
      const response = await APIUpload.uploadAvatar(fileData);
      // console.log(response);
      setSelectedImage(response?.data?.avatar?.secure_url);
    }
  };

  const handleChange = (e) => {
    switch (e.currentTarget.id) {
      case "Thư viện":
        return setChange(0);
      case "Bộ sưu tập":
        return setChange(1);
      case "Bộ Meme":
        return setChange(2);
      default:
        return;
    }
  };

  return (
    <div className="">
      <div
        id="app-body-container"
        className="flex bg-light-1 main-content justify-center "
      >
        <div className="profile-layout h-full md:p-8">
          <div className="col-span-full">
            <Link
              href="https://quizizz.com/home/certifiededucators"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg flex items-center justify-center bg-purple-400-faded h-12 mb-3 border border-lilac-20% cursor-pointer"
            >
              <img
                src="https://cf.quizizz.com/image/game-changer-badge.png"
                alt="game-changer-badge"
                className="h-8 w-8 my-auto"
              />
              <span className="font-semibold text-sm text-dark-2 ml-1 mr-5 my-auto">
                Bạn muốn trở thành Người thay đổi trò chơi được chứng nhận
                Quizizz?
              </span>
              <span className="font-semibold text-sm text-lilac mr-1 my-auto">
                Đọc thêm
              </span>
              <i className="far fa-chevron-right text-lilac font-semibold text-xs my-auto pt-0.5" />
            </Link>
            <div className="bg-light rounded-t-lg">
              <div className="flex justify-between p-6 relative">
                <div className="flex">
                  <div className="w-32 h-32 relative bg-light-1 rounded-full flex justify-center items-center overflow-hidden">
                    <div className="w-full h-full relative cursor-pointer z-20">
                      <img
                        src={selectedImage || profile?.avatar?.secure_url}
                        alt="Profile"
                        className="rounded-full object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full rounded-full bg-dark-50% z-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <FaCamera
                        className="fas fa-camera text-light"
                        style={{ fontSize: "36px" }}
                      />
                      <input
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full rounded-full"
                        type="file"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                  <div className="ml-8 flex flex-col justify-between">
                    <div>
                      <div className="font-semibold text-dark-2 flex items-center">
                        <p
                          title="Mr. adasd wfwfa"
                          className="ellipsis max-w-50 inline-block"
                        >
                          <span>{localStorage.getItem("userName")}</span>
                        </p>
                        <div className="lozenge items-center inline-flex text-xs font-semibold py-0.5 rounded px-1.5 uppercase text-light bg-purple-400 ml-1 rounded-2xl">
                          <span>SCHOOL</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lilac text-sm">{email}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex align-center">
                        <FaBook />
                        <span className="ml-1 text-dark-3">
                          Toán, Tiếng Anh, Địa lý
                        </span>
                      </div>
                      <div className="flex align-center">
                        <FaGraduationCap />
                        <span className="text-dark-3">
                          Sở Giáo Dục Hà Nội, Thành Phố Hà Nội, VN
                        </span>
                        <span className="px-2 bg-green-700 rounded text-white ml-2">
                          Đại học
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex font-semibold">
                    <div className="flex flex-col items-center">
                      <div className="text-dark-2 text-2xl">{questions?.length}</div>
                      <div className="text-dark-4 text-xs uppercase">
                        Câu đố
                      </div>
                    </div>
                    <div className="flex flex-col items-center ml-8">
                      <div className="text-dark-2 text-2xl">{allLessonByUser.length}</div>
                      <div className="text-dark-4 text-xs uppercase">
                        Bộ sưu tập
                      </div>
                    </div>
                    <div className="flex flex-col items-center ml-8">
                      <div className="text-dark-2 text-2xl">0</div>
                      <div className="text-dark-4 text-xs uppercase">
                        Bộ Meme
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex edit-btn top-4 right-4">
                  <button
                    className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded min-w-max mr-2"
                    aria-label="Share Profile"
                    type="button"
                  >
                    <FaShare className="mr-2" style={{ fontSize: "12px" }} />
                    <span className="title" title="Share Profile">
                      Chia sẻ Profile
                    </span>
                  </button>
                  <button
                    className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded min-w-max"
                    aria-label="Edit Profile"
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <FaRegEdit className="mr-2" style={{ fontSize: "12px" }} />
                    <span className="title" title="Edit Profile">
                      Sửa đổi Profile
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-b-lg bg-light-2"
              id="tabs-container"
            >
              <div className="flex px-8 pt-4">
                {arrayTitle.map((item, index) => {
                  return (
                    <button
                      type="button"
                      className="flex flex-col items-center justify-center font-semibold text-center cursor-pointer text-dark-4 min-w-32"
                      key={index}
                      id={item}
                      onClick={handleChange}
                    >
                      <span className="my-2">{item}</span>
                    </button>
                  );
                })}
              </div>
              <div
                className="absolute bottom-0 h-1 transition-all duration-200 ease-in-out bg-purple-400"
                style={{ left: `${32 + 128 * change}px`, width: "128px" }}
              />
            </div>
          </div>
          {change === 0 ? (
            <LibraryProfile />
          ) : change === 1 ? (
            <CollectionPage visiable={true} />
          ) : (
            <MemeProfile />
          )}
          {/*  */}
          {/*  */}
        </div>
        <div id="app-body-teleport" className="z-20 absolute" />
      </div>

      {isModalOpen ? (
        <EditProfile
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </div>
  );
};

export default InterfaceProfile;
