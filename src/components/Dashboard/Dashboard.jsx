import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscArchive } from "react-icons/vsc";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
// import { removeQueryParameter } from "../../page/MainPage/RemoveParams";
import { AccountNameContext } from "../../contexts/user/AccountName.jsx";
import { toast } from "react-toastify";

// Component Button tái sử dụng
const SidebarButton = ({
  icon: Icon,
  label,
  direction = "",
  isActive,
  onClick,
}) => {
  const navigate = useNavigate();

  return (
    <button
      className={`flex gap-5 items-center w-full py-2 px-4 rounded-md transition-colors 
      ${
        isActive ? "bg-purple-600 text-white" : "text-dark-2 hover:bg-gray-100"
      }`}
      onClick={() => {
        if (direction) {
          toast(`Chuyển tới ${label}`, {
            position: toast.POSITION.TOP_RIGHT,
            className: "foo-bar",
          });
          navigate(direction);
        }
        onClick(); // Trigger the parent function to set the active button
      }}
    >
      <Icon />
      {label}
    </button>
  );
};

const Dashboard = () => {
  const location = useLocation();

  const { accountName } = useContext(AccountNameContext);

  const [appear, setAppear] = useState(false);
  // const [activeButton, setActiveButton] = useState(loc); // Default active button
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    if (
      location.pathname.includes("/library") ||
      location.pathname.includes("/collection") ||
      location.pathname.includes("/profile")
    ) {
      setAppear(true);
    }
  }, [location.pathname]);
  return (
    <>
      <div className=" bg-white text-black shadow-2xl border-r border-light-1 max-w-min filter-box-shadow sticky top-0 ">
        <div className=" flex h-14 m-2">
          <img src="/1a.png" alt="logo Visual" className="a" />
        </div>
        <div data-testid="user-details" className="user-details">
          <div className="pb-2 p-4 user-section">
            <div className="max-w-min">
              <div className="relative min-w-40 max-w-40">
                <div className="flex items-center mb-3">
                  <div className="w-full">
                    <Link
                      to="/profile"
                      className="inline-block w-full text-sm font-semibold text-dark-2 cursor-pointer"
                    >
                      <div>
                        <span className="inline-block align-bottom">
                          {accountName}
                        </span>
                      </div>
                    </Link>

                    <div
                      translate="no"
                      className="lozenge items-center inline-flex text-tn font-semibold rounded px-1 bg-dark-5% text-dark-3"
                    >
                      <span className>Tài khoản</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <button
          className="bg-purple-600 text-white flex gap-2 items-center justify-center m-auto"
          style={{ marginBottom: "20px", boxShadow: "-5px 5px #6c4298" }}
          onClick={() => navigate("/create")}
        >
          <HiOutlinePlusCircle /> Tạo mới
        </button>
        <div className="flex flex-col justify-center">
          <SidebarButton
            icon={VscArchive}
            label="Khám phá"
            direction={`/?userName=${localStorage.getItem("userName")}`}
            isActive={location.pathname === "/"}
            // onClick={() => setActiveButton("/home")}
          />
          <SidebarButton
            icon={FaAddressBook}
            label="Báo cáo"
            direction={`/reports`}
            isActive={location.pathname.includes(`/reports`)}
          />
          <SidebarButton
            icon={IoIosSettings}
            label="Cài đặt"
            direction={`/setting`}
            isActive={location.pathname.includes("/setting")}
          />
        </div>
        <input
          type="checkbox"
          id="toggle-content"
          className="toggle-checkbox"
        />
        <label
          htmlFor="toggle-content"
          className="toggle-button"
          style={{ display: `${appear === true ? "none" : "block"}` }}
        >
          <button className="w-full h-full" onClick={() => setAppear(true)}>
            thêm
          </button>
        </label>

        {appear && (
          <div>
            <SidebarButton
              icon={FaAddressBook}
              label="Thư viện"
              direction={`/library/createdByMe`}
              isActive={location.pathname.includes("/library")}
            />
            <SidebarButton
              icon={FaAddressBook}
              label="Bộ sưu tập"
              direction={`/collection/all_quiz`}
              isActive={location.pathname.includes("/collection")}
            />
            <SidebarButton
              icon={FaAddressBook}
              label="Hồ sơ"
              direction={`/profile`}
              isActive={location.pathname.includes("/profile")}
            />
            <SidebarButton
              icon={MdLogout}
              label="Đăng xuất"
              onClick={() => handleLogout()}
            />
          </div>
        )}
        <input
          type="checkbox"
          id="toggle-content"
          className="toggle-checkbox"
          onClick={() => setAppear(false)}
        />
        <label
          htmlFor="toggle-content"
          className="toggle-button"
          style={{ display: `${appear === false ? "none" : "block"}` }}
        >
          <button className="w-full h-full" onClick={() => setAppear(false)}>
            ẩn
          </button>
        </label>
      </div>
    </>
  );
};

export default Dashboard;
