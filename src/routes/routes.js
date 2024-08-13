    import CreateLesson from "../components/Create/CreateLesson.jsx";
    import CreateQuestion from "../components/Create/CreateQuestion.jsx";
    import LoginPage from "../page/LoginPage/LoginPage.jsx";
    import MainPage from "../page/MainPage/MainPage.jsx";
    import ProfilePage from "../page/ProfilePage/ProfilePage.jsx";
    import Register from "../page/RegisterPage/RegisterPage.jsx";

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
    { path: "/profile/create", component: CreateQuestion },
    { path: "/profile/createLesson", component: CreateLesson },
    ];

    const privateRoutes = [
    {
        path: "/home",
        component: MainPage,
    },
    {
        path: "/",
    },
    ];

    export { publicRoutes, privateRoutes };
