import { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { ProfileContext } from "../../contexts/profile/profileContext.jsx";
import { GetInforUserContext } from "../../contexts/user/GetInforUserContext.jsx";

const EditProfile = ({ isModalOpen, setIsModalOpen }) => {
  const { profile, updateProfile } = useContext(ProfileContext);
  // console.log("🚀 ~ EditProfile ~ profile:", profile)
  const { firstName: initialFirstName, lastName: initialLastName,userId:userId } = useContext(GetInforUserContext);
  const { subjects, grade, place: initialPlace } = profile;

  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [selectedClasses, setSelectedClasses] = useState(grade );
  const [selectedSubjects, setSelectedSubjects] = useState(subjects || []);
  const [place, setPlace] = useState(initialPlace || "");

  const classLevels = [
    "Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5", "Lớp 6",
    "Lớp 7", "Lớp 8", "Lớp 9", "Lớp 10", "Lớp 11", "Lớp 12",
    "Đại học", "Phát triển chuyên môn", "Đào tạo nghề"
  ];

  const subjectsList = [
    "Toán học", "Văn học", "Tiếng Anh", "Vật lý", "Hóa học", "Sinh học",
    "Lịch sử", "Địa lý", "Giáo dục công dân", "Tin học", "Thể dục",
    "Nghệ thuật", "Công nghệ", "Âm nhạc", "Mỹ thuật", "Kỹ năng sống"
  ];

  const handleClassSelection = (item) => {
    setSelectedClasses(item);
  };

  const handleSubjectSelection = (item) => {
    setSelectedSubjects((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter((selectedItem) => selectedItem !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  const handleSubmit = () => {
    const updateData = {
      firstName,
      lastName,
      selectedClasses,
      selectedSubjects,
      place,
    }
    const profileId = profile?._id
    // Update profile with the new values
    updateProfile(profileId,updateData,userId);
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      data-cy="modal-mask"
      translate="no"
      tabIndex={0}
      data-testid="modal-container"
      className={`modal-mask fixed top-0 left-0 h-screen w-screen bg-slate-400 z-overlay flex justify-center items-center pt-6 px-6 edit-profile-modal ${isModalOpen ? "" : "hidden"}`}
    >
      <div
        className="z-on-overlay modal-anim max-w-2xl p-6 pt-2 bg-white modal-container relative rounded-lg"
        data-cy="modal-container"
        type="default"
      >
        <div className="modal-body relative rounded-lg bg-light-3 py-4">
          <div className="close-btn z-10 absolute top-1 right-0">
            <button
              type="button"
              className="transition-colors duration-200 ease-in-out flex flex items-center justify-center w-10 h-10 bg-transparent text-dark hover:bg-dark-10% active:bg-dark rounded-full transparent-floating-dark relative min-w-max"
              onClick={closeModal}
            >
              <span className="sr-only">Đóng menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative modal-header mb-4 px-4">
            <div className="flex items-center"></div>
          </div>
          <div className="px-4 modal-content overflow-y-auto">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full bg-lilac-faded flex-grow flex-shrink-0">
                <FaUserEdit className="w-10 h-10" />
              </div>
              <span className="ml-3">
                <span className="font-semibold text-dark-2">Sửa đổi thông tin</span>
                <div className="text-sm text-dark-5 font-normal">
                  <span>Để nhận được các đề xuất có liên quan, hãy đảm bảo thông tin này được cung cấp chính xác bao gồm cả tên tổ chức của bạn.</span>
                </div>
              </span>
            </div>
            <div className="flex items-end gap-2 mt-4">
              <div>
                <div className="mb-1 text-xs font-semibold text-dark">
                  <span>Giới tính</span>
                </div>
                <div>
                  <div className="select-box">
                    <div
                      id={14}
                      className="label font-semibold text-xs mb-1 ml-1 text-dark sr-only"
                    >
                      Giới tính
                    </div>
                    <div className="relative inline-flex w-full">
                      <button
                        id={15}
                        type="button"
                        data-testid="title-select-edit-profile-modal-select-box"
                        className="flex items-center w-20 h-10 cursor-pointer rounded border border-solid border-dark bg-light-3 p-2 pl-2 pr-1 text-left text-sm font-semibold text-dark-3 placeholder-dark-5 focus:ring-2 focus:ring-lilac"
                        aria-haspopup="listbox"
                        aria-labelledby="14 15"
                        aria-expanded="false"
                      >
                        <div
                          className="w-full truncate text-sm"
                          data-cy="select-box-value:"
                          aria-live="assertive"
                        >
                          Mr.
                        </div>
                        <div
                          className="ml-auto flex h-6 w-6 items-center justify-center"
                          aria-hidden="true"
                        >
                          <FaCaretDown className="text-dark-3" />
                        </div>
                      </button>
                      <ul
                        className="absolute top-2 z-30 mt-2 max-h-52 w-full origin-top scale-y-0 transform overflow-y-auto rounded bg-light-3 shadow-md transition-transform"
                        aria-labelledby={14}
                        role="listbox"
                      >
                        <li
                          id={17}
                          data-cy=":Mr."
                          data-testid="title-select-edit-profile-modal-select-box-option-1"
                          className="flex cursor-pointer border-b-2 border-lilac bg-lilac-faded p-2 text-lilac hover:bg-dark"
                          role="option"
                          aria-selected="true"
                        >
                          <div className="text-lilac">
                            <div className="text-sm font-semibold">Mr.</div>
                          </div>
                        </li>
                        <li
                          id={18}
                          data-cy=":Ms."
                          data-testid="title-select-edit-profile-modal-select-box-option-2"
                          className="flex cursor-pointer border-b border-transparent p-2 hover:bg-dark"
                          role="option"
                          aria-selected="false"
                        >
                          <div className="text-dark">
                            <div className="text-sm font-semibold">Ms.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full">
                  <label className="font-semibold text-xs mb-1 ml-1 text-dark" htmlFor="first-name">
                    Họ
                  </label>
                  <div className="relative">
                    <input
                      id="first-name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      name="First Name"
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-dark-5 focus:ring-2 focus:ring-lilac focus:border-lilac"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full">
                  <label className="font-semibold text-xs mb-1 ml-1 text-dark" htmlFor="last-name">
                    Tên
                  </label>
                  <div className="relative">
                    <input
                      id="last-name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      name="Last Name"
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-dark-5 focus:ring-2 focus:ring-lilac focus:border-lilac"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-4 w-full">
              <label className="font-semibold text-xs mb-1 ml-1 text-dark" htmlFor="place">
                Địa chỉ
              </label>
              <input
                id="place"
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-dark-5 focus:ring-2 focus:ring-lilac focus:border-lilac"
              />
            </div>
            <div className="relative mt-4">
              <label className="font-semibold text-xs mb-1 ml-1 text-dark">Lớp học</label>
              <div className="flex flex-wrap gap-2">
                {classLevels.map((className) => (
                  <button
                    key={className}
                    onClick={() => handleClassSelection(className)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedClasses===className ? "bg-purple-500 text-white"
                      : "bg-light-1 text-dark"
                    }`}
                  >
                    {className}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative mt-4">
              <label className="font-semibold text-xs mb-1 ml-1 text-dark">Môn học</label>
              <div className="flex flex-wrap gap-2">
                {subjectsList.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => handleSubjectSelection(subject)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSubjects.includes(subject) ? "bg-purple-500 text-white"
                      : "bg-lilac text-dark"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-footer mt-4 px-4 flex justify-end">
          <button
              type="button"
              className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-lilac-dark focus:outline-none"
              onClick={handleSubmit}
            >
              Lưu thay đổi
            </button>
            <button
              type="button"
              className="ml-2 bg-light-3 text-dark px-4 py-2 rounded-md hover:bg-dark-10 focus:outline-none"
              onClick={closeModal}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
