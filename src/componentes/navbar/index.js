import React,{useState, useEffect} from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink } from './NavbarElements'

const Navbar = ()=>  {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
  
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon/>
                            POST-IT
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars/>}
                    </MobileIcon>    
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to="/home" activeStyle> home </NavLink>
                        </NavItem>
                    
                        <NavItem>
                            <NavLink to="/portifolio" activeStyle>portifolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/reserva" activeStyle>Reserva</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/Contato' activeStyle>Contato</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar