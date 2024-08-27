// import React from "react";
import FooterSection from "./FooterSection.jsx"; // Đường dẫn component
import { LogoSection } from "./LogoSection.jsx";
import { AppDownloadSection } from "./AppDownloadSection.jsx";
import { LegalSection } from "./LegalSection.jsx";
import { SocialSection } from "./SocialSection.jsx";

const Footer = () => {
  const sections = [
    {
      title: "Features",
      links: [
        { href: "https://quizizz.com/home/schools-and-districts", label: "School & District" },
        { href: "https://quizizz.com/quizizzforwork", label: "Quizizz for Work" },
        { href: "https://quizizz.com/home/quiz-maker", label: "Create a quiz" },
        { href: "/admin?modal=contentCreation&type=lesson", label: "Create a lesson" },
      ],
    },
    {
      title: "Subjects",
      links: [
        { href: "/en/mathematics-worksheets", label: "Mathematics" },
        { href: "/en/social-studies-worksheets", label: "Social Studies" },
        { href: "/en/science-worksheets", label: "Science" },
        { href: "/en/physics-worksheets", label: "Physics" },
      ],
    },
    {
      title: "About",
      links: [
        { href: "https://quizizz.com/about", label: "Our Story" },
        { href: "https://blog.quizizz.com/", label: "Quizizz Blog" },
        { href: "https://drive.google.com/drive/folders/17nhRoJJX7ST9vyLAEysBfwz0UVJa8cTf", label: "Media Kit" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "https://support.quizizz.com/hc/en-us", label: "F.A.Q." },
        { href: "https://quizizz.com/privacy", label: "Privacy Policy" },
      ],
    },
  ];

  return (
    <footer className="w-full py-8  bg-light-3 ">
      <div className="px-4 mx-auto max-w-7xl md:px-10">
        <div className="flex flex-col justify-between w-full">
          {/* Logo và App Download */}
          <div className="flex flex-col items-center md:items-start md:flex-row justify-between w-full mb-8">
            <LogoSection />
            <AppDownloadSection />
          </div>
          {/* Các phần khác */}
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4">
            {sections.map((section, index) => (
              <FooterSection key={index} title={section.title} links={section.links} />
            ))}
          </div>
          {/* Legal và Social */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <LegalSection />
            <SocialSection />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
