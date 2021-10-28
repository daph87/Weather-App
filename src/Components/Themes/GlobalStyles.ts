/** @format */

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .form-outline .form-control~.form-label{
    color:${({ theme }) => theme.color}
  }
  .modal-header, .modal-body{
    color:black!important
  }
  .form-outline .form-control{
    color:${({ theme }) => theme.color}
  }`;
