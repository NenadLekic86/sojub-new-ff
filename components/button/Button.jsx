import React, { useEffect } from 'react';
import BtnInkTopLeftC from '../svg/BtnInkTopLeftC';
import BtnInkTop from '../svg/BtnInkTop';
import BtnInkBottomRight from '../svg/BtnInkBottomRight';
import BtnInkBottomLeft from '../svg/BtnInkBottomLeft';
import '../../styles/button.css';

const Button = ({ 
  id, 
  containerClass,
  href,
  onClick,
  children,
}) => {
  const btnClasses = 
  `relative flex items-center justify-center bg-gradient-to-b from-[#FC7668] to-[#EB553A] shadow-inner shadow-custom-inset overflow-hidden py-[12px] px-[22px] rounded-[10px]
  `;

  const linkClasses =
  `relative flex items-center justify-center bg-gradient-to-b from-[#FC7668] to-[#EB553A] shadow-inner shadow-custom-inset overflow-hidden py-[12px] px-[22px] rounded-[10px]
  `;

  const renderButton = () => (
    <div className={`
      btnGroup relative inline-block 
      ${containerClass}
    `}>
      <button 
        id={id}
        className={btnClasses}
        onClick={onClick}
      >
        <div className='nav-btn'>
          {children}
        </div>
        <div className="absolute top-[4px] left-[5px] z-0 btnGroup-hover:top-[7px] btnGroup-hover:left-[5px] btnGroupTRC-hover:scale-125 transition-transform duration-300">
          <BtnInkTopLeftC />
        </div>
        <div className="absolute top-[4px] left-[20px] z-0 btnGroup-hover:top-[4px] btnGroupT-hover:left-[30px] btnGroupT-hover:scale-150 transition-transform duration-300">
          <BtnInkTop />
        </div>
        <div className="absolute bottom-[4px] left-[5px] z-0 btnGroup-hover:bottom-[4px] btnGroup-hover:left-[10px] btnGroupBL-hover:scale-200 transition-transform duration-300">
          <BtnInkBottomLeft />
        </div>
        <div className="absolute bottom-[4px] right-[5px] z-0 btnGroup-hover:bottom-[10px] btnGroup-hover:right-[10px] btnGroupRB-hover:scale-200 transition-transform duration-300">
          <BtnInkBottomRight />
        </div>
      </button>
    </div>
  );

  const renderLink = () => (
    <div className={`
      btnGroup relative inline-block
      ${containerClass}
    `}>
      <a 
        id={id}
        href={href}
        className={linkClasses}
      >
        <div className='nav-btn'>
          {children}
        </div>
        <div className="absolute top-[4px] left-[5px] z-0 btnGroup-hover:top-[7px] btnGroup-hover:left-[5px] btnGroupTRC-hover:scale-125 transition-transform duration-300">
          <BtnInkTopLeftC />
        </div>
        <div className="absolute top-[4px] left-[20px] z-0 btnGroup-hover:top-[4px] btnGroupT-hover:left-[30px] btnGroupT-hover:scale-150 transition-transform duration-300">
          <BtnInkTop />
        </div>
        <div className="absolute bottom-[4px] left-[5px] z-0 btnGroup-hover:bottom-[4px] btnGroup-hover:left-[10px] btnGroupBL-hover:scale-200 transition-transform duration-300">
          <BtnInkBottomLeft />
        </div>
        <div className="absolute bottom-[4px] right-[5px] z-0 btnGroup-hover:bottom-[10px] btnGroup-hover:right-[10px] btnGroupRB-hover:scale-200 transition-transform duration-300">
          <BtnInkBottomRight />
        </div>
      </a>
    </div>
  );

  return href ? renderLink() : renderButton();
}

export default Button