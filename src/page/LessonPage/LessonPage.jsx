import "./LessonPage.css";
import LessonHeader from "../../components/Interface/Lesson/LessonHeader.jsx";
import LessonSection from "../../components/Interface/Lesson/LessonSection.jsx";
import SideRightLesson from "../../components/Interface/Lesson/SideRightLesson.jsx";
import { useParams } from "react-router-dom";
import { useFetchAPILessonById } from "../../hook/useFetchAPILesson.jsx";

const LessonPage = () => {
  const { id } = useParams();
  // console.log(id);
  const { lesson } = useFetchAPILessonById(id);
  return (
    <div className="relative flex justify-center w-full p-2 slug">
      <div className="flex relative w-full justify-center flex-row-reverse">
        <SideRightLesson />
        <div
          className="quiz-container md:min-w-160 "
          style={{ maxWidth: "800px" }}
        >
          <LessonHeader lesson={lesson} />
          <LessonSection lesson={lesson}/>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
