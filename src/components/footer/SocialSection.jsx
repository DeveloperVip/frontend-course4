export const SocialSection = () => {
    const socialLinks = [
      { href: "https://www.facebook.com/quizizz", icon: "fab fa-facebook-f" },
      { href: "https://twitter.com/quizizz", icon: "fab fa-twitter" },
      { href: "https://www.instagram.com/quizizz/", icon: "fab fa-instagram" },
    ];
  
    return (
      <div className="flex space-x-4 mt-4 md:mt-0">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-3 hover:text-primary-500"
          >
            <i className={`${social.icon} text-xl`} />
          </a>
        ))}
      </div>
    );
  };
  