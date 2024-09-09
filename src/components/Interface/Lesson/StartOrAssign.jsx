import React, { useState } from 'react';
import { FaChalkboardTeacher, FaClock } from 'react-icons/fa';
import SetTimeLesson from './SetTimeLesson.jsx'; // Import SetTimeLesson component

const StartOrAssign = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonSelect = (lessonType) => {
    setSelectedLesson(lessonType);
  };

  const handleTimeSubmit = (hour, minute) => {
    // console.log(`Selected time: ${hour} giờ ${minute} phút`);
  };

  return (
    <div className="relative w-full sticky top-16 z-50">
      <div className="md:rounded">
        <div className="flex gap-2">
          <div className="w-full">
            <button
              onClick={() => handleLessonSelect('INSTRUCTOR-LED LESSON')}
              className="transition-colors duration-200 ease-in-out flex items-center px-4 py-2.5 text-lg font-semibold bg-purple-700 text-light-3 hover:bg-purple-500 active:bg-purple rounded-lg special w-full justify-center"
            >
              <FaChalkboardTeacher className="mr-2" style={{ fontSize: 16 }} />
              <span>Đặt thời gian làm bài </span>
            </button>
          </div>

          <div className="w-full">
            <button
              onClick={() => handleLessonSelect('ASYNCHRONOUS LEARNING')}
              className="transition-colors duration-200 ease-in-out flex items-center px-4 py-2.5 text-lg font-semibold bg-purple-700 text-light-3 hover:bg-purple-500 active:bg-purple rounded-lg special w-full justify-center"
            >
              <FaClock className="mr-2" style={{ fontSize: 16 }} />
              <span>Hạn nộp bài </span>
            </button>
          </div>
        </div>
      </div>

      {selectedLesson && (
        <SetTimeLesson
          title={selectedLesson}
          onSubmit={handleTimeSubmit}
          setTitle= {setSelectedLesson}
        />
      )}
    </div>
  );
};

export default StartOrAssign;
