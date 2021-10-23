/** @format */

import React, { useState } from "react";

import "./styles.scss";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Themes/GlobalStyles";
import { lightTheme, darkTheme } from "../Themes/Themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherActionCreators } from "../../Redux";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../Redux/Actions/types/Weather";

// fontawesome.library.add(faCheckSquare, faCoffee);

const Header = () => {
  const [theme, setTheme] = useState("light");

  const dispatch = useDispatch();
  const { setMetricConversion } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  const metric = useSelector<RootState, WeatherState["metric"]>(
    (state) => state.weatherInfo.metric
  );

  const switchMetric = () => {
    metric === "Celsius"
      ? setMetricConversion("Fahrenheit")
      : setMetricConversion("Celsius");
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
            <div onClick={switchMetric}>
              {metric === "Celsius" ? <p>C° to F°</p> : <p>F° to C°</p>}
            </div>
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
