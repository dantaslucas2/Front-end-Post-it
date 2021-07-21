import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = (page) => {
    if (page !== "mobile") {
      props.handleClick(page);
    }
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              POST-IT
            </NavLogo>
            <MobileIcon onClick={() => handleClick("mobile")}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              <NavItem onClick={() => handleClick("home")}>
                <NavLink to="/home" activeStyle>
                  {" "}
                  Home{" "}
                </NavLink>
              </NavItem>

              <NavItem onClick={() => handleClick("portifolio")}>
                <NavLink to="/portifolio" activeStyle>
                  Portifólio
                </NavLink>
              </NavItem>
              <NavItem onClick={() => handleClick("formulario")}>
                <NavLink to="/formulario" activeStyle>
                  Reserva
                </NavLink>
              </NavItem>
              <NavItem onClick={() => handleClick("contato")}>
                <NavLink to="/Contato" activeStyle>
                  Contato
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
