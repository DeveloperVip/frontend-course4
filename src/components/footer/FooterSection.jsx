// import React from "react";

const FooterSection = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-sm font-bold text-dark-3">{title}</h2>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index} className="text-sm text-dark-3">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
