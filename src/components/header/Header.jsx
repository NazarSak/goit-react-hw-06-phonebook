import React from "react"
import PropTypes from 'prop-types';
import { TitleWords } from "./header.styled"

export const Header = ({title}) => {
   return(
<TitleWords>{title}</TitleWords>
   ) 
}

Header.propTypes = {
   title: PropTypes.string.isRequired,
 };