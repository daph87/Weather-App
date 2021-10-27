/** @format */

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { GlobalStyles } from "../Themes/GlobalStyles";
import { lightTheme, darkTheme } from "../Themes/Themes";
import { weatherActionCreators } from "../../Redux";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../Redux/Actions/types/weather";
import "./header.scss";

const Header: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const dispatch = useDispatch();
  const { setUnitConversion } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  const unit = useSelector<RootState, WeatherState["unit"]>(
    (state) => state.weatherInfo.unit
  );

  const switchUnit = () => {
    unit === "C"
      ? setUnitConversion("F")
      : setUnitConversion("C");
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className='NavBar'>
          <div>
            <div onClick={themeToggler}>
              <FontAwesomeIcon
                icon={theme === "light" ? faToggleOff : faToggleOn}
              />
            </div>
            <div className='switchUnit' onClick={switchUnit}>
              {unit === "C" ? <p>C° to F°</p> : <p>F° to C°</p>}
            </div>
          </div>

          <div className='title'>The Weather Channel</div>

          <div className='links'>
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
