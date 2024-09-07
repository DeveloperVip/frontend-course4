// import React, { useState } from 'react';
import { useContext, useEffect, useState } from "react";
import "./SettingPage.css";
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown, FaFlag, FaLanguage, FaLock } from "react-icons/fa6";
import { APIUser } from "../../services/API/APIUser.jsx";
import { GetInforUserContext } from "../../contexts/user/GetInforUserContext.jsx";
const SettingPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { identify, setIdentify, email, setEmail, username, setUsername } =
    useContext(GetInforUserContext);

  const handleSaveAccount = async () => {
    // Logic to save email and username
    // console.log("Email:", email);
    // console.log("Username:", username);
    const data = {
      email: email,
      userName: username,
    };
    const response = await APIUser.APIUpdateInfor(identify, data);
    // console.log("🚀 ~ handleSaveAccount ~ response:", response);
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      alert("Mật khẩu mới phải có ít nhất 6 ký tự.");
      return;
    }

    if (newPassword !== repeatPassword) {
      alert("Mật khẩu mới và nhập lại mật khẩu không khớp.");
      return;
    }

    // Logic to change password
    // console.log("Old Password:", oldPassword);
    // console.log("New Password:", newPassword);
    // console.log("Repeat Password:", repeatPassword);
    const data = {
      newPassword: newPassword,
      password: oldPassword,
    };
    const response = await APIUser.APIUpdatePassword(identify, data);
    // console.log(response);
  };
  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setLanguageDropdownOpen(false); // Đóng dropdown sau khi chọn ngôn ngữ
  };

  return (
    <div className="flex bg-light-1 main-content justify-center overflow-auto">
      <div
        className="overflow-auto settings-layout-desktop p-8"
        // style={{ marginTop: "250px" }}
      >
        <div className="settings-container flex flex-col p-6 rounded w-96 bg-light-3 desktop">
          <div className="flex mt-6 text-2xl font-bold justify-left text-dark-3">
            <span>Cài Đặt</span>
          </div>

          {/* Thông Tin Tài Khoản */}
          <div className="pb-3 flex items-center mt-8 mb-6 text-base font-semibold border-b h-9 border-dark-6">
            <FaUserCircle
              className="flex items-center fa fa-user-circle mr-2"
              style={{ fontSize: 16 }}
            />
            <span>Thông Tin Tài Khoản</span>
          </div>

          {/* Email */}
          <div className="email">
            <div className="mb-1 text-xs font-semibold text-dark-3">
              <span>Email</span>
            </div>
            <input
              id="email-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:outline-none h-auto w-full py-2 text-sm placeholder-sm font-semibold remove-number-selector pl-3 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac bg-light-3 text-dark-2 border-dark-4 placeholder-dark-5 pr-3"
              placeholder="email"
              autoComplete="off"
              style={{ height: "auto" }}
            />
          </div>

          {/* Tên Người Dùng */}
          <div className="username">
            <div className="mt-6 mb-1 text-xs font-semibold text-dark-3">
              <span>Tên Người Dùng</span>
            </div>
            <input
              id="username-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm font-semibold remove-number-selector pl-3 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac bg-light-3 text-dark-2 border-dark-4 placeholder-dark-5 pr-3"
              placeholder="Tên người dùng"
              autoComplete="off"
              style={{ height: "auto" }}
            />
          </div>

          {/* Nút Lưu Thông Tin Tài Khoản */}
          <button
            className="transition-colors duration-200 ease-in-out flex items-center justify-center px-7.5 py-2.5 text-lg font-semibold q-shadow mb-1 h-10 base bg-purple-600 text-light-3 hover:bg-purple-500 active:bg-purple rounded-lg primary relative min-w-max w-full mt-6"
            aria-label="Save account info"
            type="button"
            onClick={handleSaveAccount}
          >
            <span className="title" title="Lưu thông tin tài khoản">
              Lưu Thông Tin Tài Khoản
            </span>
          </button>

          {/* Ngôn Ngữ */}
          <div className="flex items-center pb-3 mt-12 mb-6 text-base font-semibold border-b h-9 border-dark-6">
            <FaLanguage style={{ fontSize: 16 }} />
            <span>Ngôn Ngữ</span>
          </div>

          <div className="mb-1 text-xs font-semibold text-dark-3">
            <span>Chọn ngôn ngữ ưa thích</span>
          </div>

          <div className="select-box">
            <div className="select w-full inline-flex relative">
              <button
                type="button"
                className="listbox-button flex items-center cursor-pointer box-border text-left rounded font-semibold text-sm text-dark-3 p-4 border border-dark-6 text-dark-2 pl-2 pr-1 py-2 h-10 w-full"
                onClick={toggleLanguageDropdown}
              >
                <FaFlag className="mr-2" style={{ fontSize: 12 }} />
                <span className="w-full truncate">{language}</span>
                <FaCaretDown className="ml-auto text-dark-3" />
              </button>

              {isLanguageDropdownOpen && (
                <ul className="listbox absolute z-30 list bg-light-3 shadow-soft-high w-full transform rounded transition-transform h-80 mt-12 overflow-y-auto">
                  {[
                    "English",
                    "Español",
                    "Français",
                    "Polski",
                    "Русский",
                    "Bahasa Indonesia",
                    "Melayu",
                    "Filipino",
                    "Deutsch",
                    "Tiếng Việt",
                    "ไทย",
                    "Português",
                    "한국인",
                    "中文 （简体）",
                    "中文 （繁體）",
                    "Türk",
                    "Italiano",
                    "日本語",
                    "қазақша",
                  ].map((lang) => (
                    <li
                      key={lang}
                      className={`option cursor-pointer p-2 flex ${
                        language === lang
                          ? "bg-purple-600 text-light-3"
                          : "bg-light-3 text-dark-3"
                      } hover:bg-purple-400 hover:text-white`}
                      onClick={() => selectLanguage(lang)}
                    >
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Mật Khẩu */}
          <div className="flex items-center pb-3 mt-12 mb-6 text-base font-semibold border-b h-9 border-dark-6">
            <FaLock
              className="flex items-center fa fa-lock mr-2"
              style={{ fontSize: 16 }}
            />
            <span>Mật Khẩu</span>
          </div>

          {/* Mật Khẩu Cũ */}
          <div className="mb-1 text-xs font-semibold text-dark-3">
            <span>Mật khẩu cũ</span>
          </div>
          <input
            id="old-password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm remove-number-selector pl-3 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac bg-light-3 text-dark-2 border-dark-4 placeholder-dark-5 pr-3"
            placeholder=" "
            autoComplete="off"
          />

          {/* Mật Khẩu Mới */}
          <div className="mt-6 mb-1 text-xs font-semibold text-dark-3">
            <span>Mật khẩu mới (Ít nhất 6 ký tự)</span>
          </div>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm remove-number-selector pl-3 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac bg-light-3 text-dark-2 border-dark-4 placeholder-dark-5 pr-3"
            placeholder=" "
            autoComplete="off"
          />

          {/* Nhập Lại Mật Khẩu Mới */}
          <div className="mt-6 mb-1 text-xs font-semibold text-dark-3">
            <span>Nhập lại mật khẩu mới</span>
          </div>
          <input
            id="repeat-password"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm remove-number-selector pl-3 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac bg-light-3 text-dark-2 border-dark-4 placeholder-dark-5 pr-3"
            placeholder=" "
            autoComplete="off"
          />

          {/* Change Password Button */}
          <button
            className="transition-colors duration-200 ease-in-out flex items-center justify-center px-7.5 py-2.5 text-lg font-semibold q-shadow mb-1 h-10 base bg-purple-600 text-light-3 hover:bg-purple-500 active:bg-purple-600 rounded-lg primary relative min-w-max w-full mt-6"
            aria-label="Change password"
            type="button"
            onClick={handleChangePassword}
          >
            <span className="title" title="Change password">
              Thay đổi mật khẩu
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
