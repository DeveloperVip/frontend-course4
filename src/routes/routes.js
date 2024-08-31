// import CreateLesson from "../components/Create/CreateLesson.jsx";
import Collection from "../components/Collection/Collection.jsx";
import CreateQuestion from "../components/Create/CreateQuestion.jsx";
import CreateLesson from "../components/Create/Lesson/CreateLesson.jsx";
import Preview from "../components/Create/Preview.jsx";
// import QuizHeader from "../components/Interface/Lesson/LessonHeader.jsx";
// import LessonSection from "../components/Interface/Lesson/LessonSection.jsx";
import StartGame from "../components/Interface/StartGame/StartGame.jsx";
import Layout from "../components/Layout/Layout.jsx";
import AllMyContent from "../components/Library/Section/AllMyContent.jsx";
import AddTopic from "../components/Setting/AddTopic.jsx";
import SettingLesson from "../components/Setting/SettingLesson.jsx";
// import ReportHeader from "../components/Report/ReportHeader.jsx";
// import ReportSection from "../components/Report/ReportSection.jsx";
// import CreateByMe from "../components/Library/Section/CreateByMe.jsx";
// import SidebarLib from "../components/Library/Sidebar/SidebarLib.jsx";
import CheckPointPage from "../page/CheckPoint/CheckPointPage.jsx";
import LessonPage from "../page/LessonPage/LessonPage.jsx";
import LibraryPage from "../page/LibraryPage/LibraryPage.jsx";
import LoginEmail from "../page/LoginPage/LoginEmail.jsx";
import LoginPage from "../page/LoginPage/LoginPage.jsx";
import MainPage from "../page/MainPage/MainPage.jsx";
import ProfilePage from "../page/ProfilePage/ProfilePage.jsx";
import Register from "../page/RegisterPage/RegisterPage.jsx";
import ReportPage from "../page/Report/ReportPage.jsx";
import SettingPage from "../page/SettingPage/SettingPage.jsx";

const publicRoutes = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/login/email",
    component: LoginEmail,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    component: ProfilePage,
    layout: Layout,
  },
  { path: "/create", component: CreateQuestion },
  { path: "/createLesson", component: CreateLesson },
  // {path:"/profile/editProfile",component:EditProfile}
  { path: "/setting", component: SettingPage, layout: Layout },
  { path: "/preview", component: Preview },
  {path:"/all-my-content",component:AllMyContent},
  {path:"/collection",component:Collection, layout:Layout   },
  // {path:"/sidebarlib",component:SidebarLib},
  // {path:"/section",component:CreateByMe}
  { path: "/library/:id", component: LibraryPage,layout:Layout },
  {
    path: "/",
    component: MainPage,layout:Layout
  },
  { path: "/presentation/:id", component: LessonPage, layout: Layout },
  {path:"/startGame/:id",component:StartGame},
  {path:"/checkPoint",component:CheckPointPage,layout:Layout},
  {path:"/report",component:ReportPage,layout:Layout},
  {path:"/test", component:SettingLesson},
  {path:"/addTopic",component:AddTopic},
];

const privateRoutes = [
  // {
  //   path: "/",
  // },
];

export { publicRoutes, privateRoutes };
