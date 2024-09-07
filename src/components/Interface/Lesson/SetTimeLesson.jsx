import React, { useEffect, useState } from "react";

const SetTimeLesson = ({ title = "", onSubmit, setTitle }) => {

  const [isVisible, setIsVisible] = useState(
    title  ? true : false
  );
  useEffect(() => {
    if (title ) {
      setIsVisible(true);
    }
  }, [title, setTitle]);
  // const handleOpen = () => {
  //   setIsVisible(true);
  // };

  const handleClose = () => {
    setIsVisible(false);
    setTitle(false);
  };

  // Handle hour change
  const [deadlineDate, setDeadlineDate] = useState(""); // State for the deadline date
  const [deadlineTime, setDeadlineTime] = useState(""); // State for the deadline time

  const handleDateChange = (e) => {
    setDeadlineDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setDeadlineTime(e.target.value);
  };

  const handleSubmit = () => {
    // Logic to handle the submission of the selected deadline
    alert(`Deadline set for: ${deadlineDate} at ${deadlineTime}`);
  };

  // const handleSubmit = () => {
  //   onSubmit(hour, minute);
  //   handleClose();
  // };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative z-50">
            <h4 className="text-sm font-semibold">{title}</h4>
            <div className="flex flex-col items-center justify-center space-y-4 p-4">
              <h2 className="text-lg font-semibold">
                Lập thời gian cho lesson
              </h2>

              {title === "ASYNCHRONOUS LEARNING" && <div className="flex flex-col">
                <label htmlFor="deadline-date" className="mb-1 font-medium">
                  Chọn ngày:
                </label>
                <input
                  type="date"
                  id="deadline-date"
                  value={deadlineDate}
                  onChange={handleDateChange}
                  className="border rounded p-2"
                />
              </div>}

              <div className="flex flex-col">
                <label htmlFor="deadline-time" className="mb-1 font-medium">
                  Chọn giờ:
                </label>
                <input
                  type="time"
                  id="deadline-time"
                  value={deadlineTime}
                  onChange={handleTimeChange}
                  className="border rounded p-2"
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Gửi
              </button>
              <button
                onClick={handleClose}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Đóng
              </button>
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        </div>
      )}
    </>
  );
};

export default SetTimeLesson;
