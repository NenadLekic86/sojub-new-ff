import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialInkTop from "../../svg/SocialInkTop";
import SocialInkBottom from "../../svg/SocialInkBottom";

const Links = ({ containerClass, BlackWhite }) => {

  const links = [
    {
      title: 'Github',
      path: '#',
      icon: <FiGithub className="text-white" />
    },
    {
      title: 'Telegram',
      path: '#',
      icon: <FaTelegramPlane className="text-white" />
    },
    {
      title: 'Discord',
      path: '#',
      icon: <FaDiscord className="text-white" />
    },
    {
      title: 'Youtube',
      path: '#',
      icon: <FaYoutube className="text-white" />
    },
    {
      title: 'Twitter',
      path: '#',
      icon: <FaXTwitter className="text-white" />
    },
  ];

  return (
    <div className={`navbar-items flex flex-row lg:flex-row mt-32 mb-10 lg:my-0 ${containerClass}`}>
      {links.map((link) => (
        <Link 
          key={link.title}
          href={link.path} 
          className="relative flex items-center justify-center group" 
        >
          <div 
            className={`relative flex items-center justify-center w-10 h-10 rounded-full ${BlackWhite ? 'bg-white' : 'bg-gradient-to-b from-[#FC7668] to-[#EB553A] shadow-inner'}  overflow-hidden`} 
            style={{ boxShadow: 'inset -1px 1px 0 0 #FFCCA4' }}
          >
            <div className="z-[1] group-hover:scale-125 transition-transform duration-300">
              {link.icon}
            </div>

            {BlackWhite ? '' : (
              <>
                <SocialInkTop className="absolute top-[4px] right-[2px] z-0 group-hover:top-[4px] group-hover:right-  [7px] group-hover:scale-125 transition-transform duration-300" />
                <SocialInkBottom className="absolute bottom-[4px] left-[7px] z-0 group-hover:bottom-[4px] group-hover:left-[15px] group-hover:scale-150 transition-transform duration-300" />
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Links;