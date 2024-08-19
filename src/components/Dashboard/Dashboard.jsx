import React, { useState } from "react";
import { VscArchive } from "react-icons/vsc";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";

// Component Button tái sử dụng
const SidebarButton = ({ icon: Icon, label }) => {
  return (
    <button className="flex gap-5 items-center w-full">
      <Icon />
      {label}
    </button>
  );
};

const Dashboard = () => {
  const [appear,setAppear] = useState(false)
  console.log(appear);
  
  return (
    <div className="h-screen bg-white text-black w-64 shadow-2xl">
      <div className="w-full flex h-14 m-2"><img src="/1a.png" alt="logo Visual" className="a" /></div>
      <div data-testid="user-details" className="user-details">
        <div className="pb-2 p-4 user-section">
          <div className="max-w-min">
            <div className="relative min-w-40 max-w-40">
              <div className="flex items-center mb-3">
                <div className="w-full">
                  <a
                    href="/profile/669faed55135824a6a3cab69"
                    className="inline-block w-full text-sm font-semibold text-dark-2 cursor-pointer"
                    data-testid="hero-profile-sidebar"
                  >
                    <div>
                      <span className="inline-block align-bottom">
                        Mr. wfwfa
                      </span>
                    </div>
                  </a>

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
      <button className="bg-purple-600 text-white w-52 flex gap-2 items-center justify-center m-auto" style={{marginBottom:"20px",boxShadow: "-5px 5px #6c4298"}}>
        <HiOutlinePlusCircle /> Tạo mới
      </button>
      <div className="flex flex-col justify-center">
        <SidebarButton icon={VscArchive} label="Khám phá" />
        <SidebarButton icon={FaAddressBook} label="Báo cáo" />
        <SidebarButton icon={IoIosSettings} label="Cài đặt" />

        
        </div><input type="checkbox" id="toggle-content" className="toggle-checkbox" />
        <label htmlFor="toggle-content" className="toggle-button" style={{display:`${appear === true ?"none":"block"}`}}><button className="w-full h-full" onClick={()=>setAppear(true)}>thêm</button></label>

        {appear && <div >
          <SidebarButton icon={FaAddressBook} label="Meme" />
          <SidebarButton icon={FaAddressBook} label="Bộ sưu tập" />
          <SidebarButton icon={FaAddressBook} label="Hồ sơ" />
          <SidebarButton icon={MdLogout} label="Đăng xuất" />
      </div>}
      <input type="checkbox" id="toggle-content" className="toggle-checkbox" onClick={()=>setAppear(false)}/>
        <label htmlFor="toggle-content" className="toggle-button" style={{display:`${appear === false ?"none":"block"}`}}><button className="w-full h-full" onClick={()=>setAppear(false)}>ẩn</button></label>
    </div>
  );
};

export default Dashboard;
