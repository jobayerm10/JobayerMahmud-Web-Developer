import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      icon: <FaGithub />,
      url: "https://github.com/jobayerm10",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/jobayer-al-mahmud26/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/the_jobayermahmud/",
      label: "Instagram",
    },
  ];

  return (
    <div className="flex flex-row gap-6 justify-center items-center mt-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-(--text-color) hover:opacity-75 transition-opacity"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
