import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.jsx";
// import Header from "../Header/Header.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex h-full flex-1">
        <Dashboard />
        <div className="flex-col w-full admin bg-slate-100">
          {/* <Header /> */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
