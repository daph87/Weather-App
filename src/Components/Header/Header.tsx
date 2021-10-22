/** @format */

import React, { useState } from "react";

import "./styles.scss";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Themes/GlobalStyles";
import { lightTheme, darkTheme } from "../Themes/Themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

// fontawesome.library.add(faCheckSquare, faCoffee);

const Header = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className='NavBar'>
          <div onClick={themeToggler}>
            <FontAwesomeIcon
              icon={theme === "light" ? faToggleOff : faToggleOn}
            />
          </div>

          <div className='title'>The Weather Channel</div>

          <div className='links'>
            {/* <FontAwesome name='toggle' className='fas fa-toggle-on' /> */}

            <NavLink exact to='/'>
              Home
            </NavLink>

            <NavLink to='/favorites'>Favorites</NavLink>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};

export default Header;
