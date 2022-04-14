import React from "react"

import { NavLink, useLocation } from 'react-router-dom';

import styles from './NavLinkContainer.module.css'

import { useTheme } from "../../ThemeContext"

export default function NavLinkContainer(props) {
  const theme = useTheme();

  const { name, path } = props;

  return (
    <div className={styles.nav_link_container}>
      <NavLink
        className={`${styles.nav_link}  ${styles.no_decoration}`}
        activeClassName={styles.active} //TODO transform to useTheme
        style={{ color: theme.header.color }}
        to={path}>
        <span className={styles.nav_link_text}>{name}</span>
      </NavLink>
      {useLocation().pathname === { path }
        && <span className={styles.active_bar} style={{ backgroundColor: theme.header_nav_link.active_bar_backgroundColor }} />}
    </div>
  )
}