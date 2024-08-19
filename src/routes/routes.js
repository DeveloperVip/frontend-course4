import CreateLesson from "../components/Create/CreateLesson.jsx";
import CreateQuestion from "../components/Create/CreateQuestion.jsx";
import Preview from "../components/Create/Preview.jsx";
import AllMyContent from "../components/Library/Section/AllMyContent.jsx";
import CreateByMe from "../components/Library/Section/CreateByMe.jsx";
import SidebarLib from "../components/Library/Sidebar/SidebarLib.jsx";
import LibraryPage from "../page/LibraryPage/LibraryPage.jsx";
import LoginPage from "../page/LoginPage/LoginPage.jsx";
import MainPage from "../page/MainPage/MainPage.jsx";
import ProfilePage from "../page/ProfilePage/ProfilePage.jsx";
import Register from "../page/RegisterPage/RegisterPage.jsx";
import SettingPage from "../page/SettingPage/SettingPage.jsx";

const publicRoutes = [
  {
    path: "/login",
    component: LoginPage,
    layout: true,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  { path: "/create", component: CreateQuestion },
  { path: "/createLesson", component: CreateLesson },
  // {path:"/profile/editProfile",component:EditProfile}
  {path:"/setting",component:SettingPage},
  {path:"/preview",component:Preview},
  // {path:"/sidebarlib",component:SidebarLib},
  // {path:"/section",component:CreateByMe}
  {path:"/library",component:LibraryPage},
  {
    path: "/home",
    component: MainPage,
  },
  {path:"/content",component:AllMyContent}
];

const privateRoutes = [
  
  {
    path: "/",
  },
];

export { publicRoutes, privateRoutes };
