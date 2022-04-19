import React from "react"

import { NavLink, useLocation } from 'react-router-dom';

import { useTheme } from "../ThemeContext"
import styled from "styled-components";

export default function NavLinkContainer(props) {
  const theme = useTheme();

  const { name, path } = props;

  return (
    <NavLinkDiv>
      <NavLinkStyled
        className={(navigationData) => navigationData.isActive ? { color: 'aqua' } : null} //TODO transform to useTheme
        style={{ color: theme.header.color }}
        to={path}>
        <NavLinkText>{name}</NavLinkText>
      </NavLinkStyled>
      {useLocation().pathname == path
        && <ActiveBar style={{ backgroundColor: theme.header_nav_link.active_bar_backgroundColor }} />}
    </NavLinkDiv>
  )
};

const NavLinkDiv = styled.div`
	padding: 20px;
  position: relative;
  justify-content: center;
  vertical-align: middle;
`;


const NavLinkStyled = styled(NavLink)`
  padding: 20px;
	text-decoration: none;
  text-decoration: none;
	&:hover{
		color: var(--text-color-link);
  /* font-size: 1.1em; */
	}
`;

const NavLinkText = styled.span`
  transition: all 0.2s;
      transform: scale(1.2);
`;

const ActiveBar = styled.span`
    position: absolute;
  bottom: 0px;
  height: 4px;
  left: 0;
  right: 0;
  z-index: 1;
`;