import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

const EditProfile = ({isModalOpen,setIsModalOpen}) => {
 
  const classLevels = [
    "Lớp 1",
    "Lớp 2",
    "Lớp 3",
    "Lớp 4",
    "Lớp 5",
    "Lớp 6",
    "Lớp 7",
    "Lớp 8",
    "Lớp 9",
    "Lớp 10",
    "Lớp 11",
    "Lớp 12",
    "Đại học",
    "Phát triển chuyên môn",
    "Đào tạo nghề",
  ];
  const subjects = [
    "Toán học",
    "Văn học",
    "Tiếng Anh",
    "Vật lý",
    "Hóa học",
    "Sinh học",
    "Lịch sử",
    "Địa lý",
    "Giáo dục công dân",
    "Tin học",
    "Thể dục",
    "Nghệ thuật",
    "Công nghệ",
    "Âm nhạc",
    "Mỹ thuật",
    "Kỹ năng sống",
  ];

  // State để lưu trữ các mục đã chọn
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // Hàm để chọn lớp
  const handleClassSelection = (item) => {
    setSelectedClasses((prevSelected) => {
      // Nếu lớp đã được chọn thì bỏ chọn
      if (prevSelected.includes(item)) {
        return prevSelected.filter((selectedItem) => selectedItem !== item);
      } else {
        // Nếu lớp chưa được chọn thì thêm vào danh sách
        return [...prevSelected, item];
      }
    });
  };

  // Hàm để chọn môn học
  const handleSubjectSelection = (item) => {
    setSelectedSubjects((prevSelected) => {
      // Nếu môn học đã được chọn thì bỏ chọn
      if (prevSelected.includes(item)) {
        return prevSelected.filter((selectedItem) => selectedItem !== item);
      } else {
        // Nếu môn học chưa được chọn thì thêm vào danh sách
        return [...prevSelected, item];
      }
    });
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
      className={`modal-mask fixed top-0 left-0 h-screen w-screen bg-slate-400 z-overlay flex justify-center items-center pt-6 px-6 edit-profile-modal ${isModalOpen?"":"hidden"}`}
      //   grades={13}
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
              onClick={closeModal} // Gán hàm đóng modal vào nút
            >
              <span className="sr-only">Đóng menu</span>
              {/* Heroicon name: outline/x */}
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
                <span className="font-semibold text-dark-2">
                  Sửa đổi thông tin
                </span>
                <div className="text-sm text-dark-5 font-normal">
                  <span>
                    Để nhận được các đề xuất có liên quan, hãy đảm bảo thông tin
                    này được cung Lớp chính xác bao gồm cả tên tổ chức của bạn.
                  </span>
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
                  <label
                    className="font-semibold text-xs mb-1 ml-1 text-dark"
                    htmlFor="first-name"
                  >
                    Họ
                  </label>
                  <div className="relative">
                    <input
                      id="first-name"
                      aria-describedby="input-error-message"
                      aria-invalid="false"
                      aria-required="true"
                      type="text"
                      name="First Name"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      style={{ height: "40px" }}
                      placeholder="Họ"
                      autoComplete="off"
                      maxLength={-1}
                      tabIndex={0}
                    />
                  </div>
                  <div
                    className="flex pt-1 text-xs font-semibold text-red-500"
                    aria-live="assertive"
                    style={{ display: "none" }}
                  >
                    <span className="w-4 h-4 flex items-center justify-center mr-0.5">
                      <i
                        className="fas fa-exclamation-circle"
                        style={{ fontSize: 11 }}
                      />
                    </span>
                    <span id="input-error-message"></span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative w-full">
                  <label
                    className="font-semibold text-xs mb-1 ml-1 text-dark"
                    htmlFor="last-name"
                  >
                    Tên
                  </label>
                  <div className="relative">
                    <input
                      id="last-name"
                      aria-describedby="input-error-message"
                      aria-invalid="false"
                      aria-required="true"
                      type="text"
                      name="Last Name"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      style={{ height: "40px" }}
                      placeholder="Tên"
                      autoComplete="off"
                      maxLength={-1}
                      tabIndex={0}
                    />
                  </div>
                  <div
                    className="flex pt-1 text-xs font-semibold text-red-500"
                    aria-live="assertive"
                    style={{ display: "none" }}
                  >
                    <span className="w-4 h-4 flex items-center justify-center mr-0.5">
                      <i
                        className="fas fa-exclamation-circle"
                        style={{ fontSize: 11 }}
                      />
                    </span>
                    <span id="input-error-message"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-block text-xs text-dark mb-2 mt-4">
              <span className="font-semibold">
                <span>Lớp học</span>
              </span>
            </div>
            <div
              className="choose-grades flex items-center flex-wrap gap-2"
              role="listbox"
              aria-multiselectable="true"
            >
              {classLevels.map((item, index) => (
                <button
                  key={index}
                  className={`transition-colors duration-200 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 rounded-full selector relative min-w-max ${
                    selectedClasses.includes(item)
                      ? "bg-purple-500 text-white"
                      : "bg-light-1 text-dark"
                  }`}
                  aria-label={item}
                  type="button"
                  role="option"
                  aria-selected={selectedClasses.includes(item)}
                  onClick={() => handleClassSelection(item)}
                >
                  <span className="title" title={item}>
                    {item}
                  </span>
                </button>
              ))}
            </div>

            <div className="inline-block text-xs text-dark mt-4 mb-2">
              <span className="font-semibold">Môn học</span>
            </div>
            <div
              className="choose-subjects flex items-center flex-wrap gap-y-2 gap-x-1"
              role="listbox"
              aria-multiselectable="true"
            >
              {subjects.map((item, index) => (
                <button
                  key={index}
                  className={`transition-colors duration-200 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 rounded-full min-w-max ${
                    selectedSubjects.includes(item)
                      ? "bg-purple-500 text-white"
                      : "bg-lilac text-dark"
                  }`}
                  aria-label={item}
                  type="button"
                  role="option"
                  aria-selected={selectedSubjects.includes(item)}
                  onClick={() => handleSubjectSelection(item)}
                >
                  <span className="title" title={item}>
                    {item}
                  </span>
                </button>
              ))}
            </div>

            <div className="inline-block text-xs text-dark mt-4 mb-2 font-semibold">
              <span>Trường học / Tổ chức</span>
            </div>
            <div className="relative w-full">
              <div className="relative">
                <input
                  type="text"
                  className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm remove-number-selector pl-3 border border-solid border-dark rounded bg-light-3 text-dark-2 placeholder-dark-5 pr-2"
                  placeholder="Tên tổ chức"
                  autoComplete="off"
                  maxLength={-1}
                  tabIndex={0}
                  style={{ height: 40 }}
                />
              </div>
              <div
                className="flex pt-1 text-xs font-semibold text-red"
                aria-live="assertive"
                style={{ display: "none" }}
              >
                <span className="w-4 h-4 flex items-center justify-center mr-0.5">
                  <i
                    className="flex items-center far fa-exclamation-circle"
                    style={{ fontSize: 11 }}
                  />
                </span>
                <span id="input-error-message" />
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-end w-full mt-4 px-4">
            <div className="">
              <div className="flex justify-end w-fit pl-2">
                <button
                  className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-dark active:bg-dark-10% text-dark-2 hover:text-dark-3 rounded min-w-max mr-2"
                  aria-label="Cancel"
                  type="button"
                >
                  <span className="title" title="Cancel">
                    Hủy
                  </span>
                </button>
                <button
                  className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-lilac text-dark hover:bg-lilac-light active:bg-lilac-dark rounded min-w-max"
                  aria-label="Save Changes"
                  type="button"
                >
                  <span className="title" title="Save Changes">
                    Lưu thay đổi
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
