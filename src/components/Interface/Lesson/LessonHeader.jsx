import React, { useContext } from "react";
import {
  FaBook,
  FaBullseye,
  FaCopy,
  FaExclamationTriangle,
  FaGraduationCap,
  FaHeart,
  FaPlay,
  FaSave,
  FaShare,
} from "react-icons/fa";
import { ProfileContext } from "../../../contexts/profile/profileContext.jsx";

// Icon Button Component
const IconButton = ({ icon: Icon, label, additionalClass = "", onClick }) => {
  return (
    <button
      className={`transition-colors duration-200 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded white relative min-w-max ${additionalClass}`}
      onClick={onClick}
    >
      <Icon className={`flex items-center mr-2`} style={{ fontSize: 11 }} />
      {label && <span className="title">{label}</span>}
    </button>
  );
};

// Info Component
const InfoItem = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center">
      <Icon
        className={`flex items-center mr-1 text-dark-4`}
        style={{ fontSize: 12 }}
      />
      <span className="text-xs text-dark-3">{text || "N/A"}</span>
    </div>
  );
};

const LessonHeader = ({ lesson = {} }) => {
  console.log("🚀 ~ LessonHeader ~ lesson:", lesson);
  const { profile } = useContext(ProfileContext);
  // Destructure lesson object with default values
  const {
    grade = "N/A",
    topic = {},
    image = "",
    name = "N/A",
    userId = {},
  } = lesson || {};
  const { name: topicName = "N/A" } = topic;
  const { userName = "Anonymous", profilePicture = "" } = userId;

  // Default values for dataLesson details
  const quizDetails = [
    { icon: FaGraduationCap, text: grade.name || "N/A" },
    { icon: FaBook, text: topicName || "N/A" },
    { icon: FaBullseye, text: "78% accuracy" },
    { icon: FaPlay, text: "147.7K plays" },
  ];

  const buttons = [
    { icon: FaHeart, label: "19", additionalClass: "hover:text-red-500" },
    { icon: FaExclamationTriangle },
  ];

  const actionButtons = [
    { icon: FaShare, label: "Chia sẻ" },
    { icon: FaCopy, label: "Sao chép và sửa đổi" },
    { icon: FaSave, label: "Lưu" },
  ];

  return (
    <div className="relative rounded z-10 p-4 h-54 bg-light-3 border-sm border border-ds-dark-500-20 w-full">
      <div className="flex">
        {/* Quiz Image */}
        <div className="w-32 h-32 relative flex justify-center items-center overflow-hidden">
          <div className="bg-light-1 flex items-center justify-center shrink-0 rounded-sm w-full h-full">
            <img
              src={image || "default-image-url"} // Replace with actual image URL
              alt="Quiz Image"
              className="lazy-img rounded-inherit object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Quiz Info */}
        <div className="flex flex-col w-10/12 ml-3">
          <div className="flex text-xxs text-dark-4 font-semibold h-4 mb-0.5 gap-1">
            <div className="px-2 flex items-center uppercase rounded-full border border-solid border-ds-dark-500-20">
              <span className="ml-1 text-xxs text-ds-dark-200 font-semibold">
                lesson
              </span>
            </div>
          </div>
          <div className="flex w-3/5 my-1 quiz-name text-xl min-h-12 text-dark-2">
            <h1 className="text-lg font-semibold inline-block text-left align-middle break-custom">
              {name || "No Name Provided"}
            </h1>
          </div>

          {/* Profile Details */}
          <div className="profile-details-row-container">
            {quizDetails.map((detail, index) => (
              <React.Fragment key={index}>
                <InfoItem icon={detail.icon} text={detail.text} />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-1">
          {buttons.map((button, index) => (
            <IconButton
              key={index}
              icon={button.icon}
              label={button.label}
              additionalClass={button.additionalClass}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex mt-4 flex-row justify-between items-center">
        <div className="flex items-start">
          <img
            src={profile?.avatar?.secure_url || "default-profile-picture-url"} // Replace with actual profile picture URL
            alt="User"
            className="w-8 h-8 mr-2 rounded-full cursor-pointer"
          />
          <div className="flex flex-col items-start">
            <button
              type="button"
              className="text-xs truncate cursor-pointer text-dark-2 hover:underline"
            >
              {userName || "Anonymous"}
            </button>
          </div>
        </div>

        {/* Footer Action Buttons */}
        <div className="flex justify-between space-x-1">
          {actionButtons.map((button, index) => (
            <IconButton
              key={index}
              icon={button.icon}
              label={button.label}
              additionalClass={button.additionalClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonHeader;
