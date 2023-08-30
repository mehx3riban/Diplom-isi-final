import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function CategoryDropdown(props) {
  let { title } = props;

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let button = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  return (
    <div className="menu">
      <div className="menu-button"
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true);
        }}
        onMouseEnter={event => {
          setIsOverButton(true);
        }}
        onMouseLeave={event => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(true);
          setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{title}</span> <span aria-hidden>▾</span>
      </div>
      <div className="menu-list"
        onMouseEnter={event => {
          setIsOverList(true);
        }}
        onMouseLeave={event => {
          setIsOverList(false);
        }}
      >
        <div className="menu-item"
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 1
        </div>
        <div className="menu-item"
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 2
        </div>
      </div>
    </div>
  );
}




// import React, { useState } from "react";
// import './Dropdown.scss'
// import { NavLink } from "react-router-dom";
// import { MenuItems } from "./MenuItems";

// const DropdownMenu = () => {

//   const [click , setClick]=useState(false)

//   const handleClick = () =>{
//     setClick(!click)
//   }

//   return (
//     <div>
//         <ul
//         onClick={handleClick}
//         className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
//         >
//           {
//             MenuItems.map((item,i)=>{
//               return(
//                 <li key={i}>
//                   <NavLink className={item.classAdi} to={item.path} onClick={()=>setClick(false)}>
//                     {item.title}
//                   </NavLink>
//                 </li>
//               )
//             })
//           }
//         </ul>
//     </div>
//   )
// }

// export default DropdownMenu