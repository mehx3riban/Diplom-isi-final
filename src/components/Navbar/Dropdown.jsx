import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {

    const [open, setOpen] = useState(false);

    const bagla = () => {
      setOpen(!open);
    };
  return (
    <div>
        <NavLink onClick={bagla}>
              Pages
              {open ? 
              <div className="dropdown-class">
                <ul>
                  <li>About me</li>
                  <li>meet out team</li>
                  <li>our process</li>
                  <li>contact us</li>
                  <li>gallery</li>
                </ul>
              </div> :''}
            </NavLink>
    </div>
  )
}

export default Dropdown