import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import styles from './Header.module.css'

export default function Header(props) {

	const { theme, setTheme } = props;

	return (
		<header className={theme === 'light' ? styles.header_light : styles.header_dark}>
			<div className={styles.nav_link_container}>
				<NavLink className={`${styles.nav_link}  ${styles.no_decoration} ${styles.welcome}`} to='/'>
					Roberto Mazzalai
				</NavLink>
			</div>
			<nav>
				<div className={styles.nav_link_container}>
					<NavLink className={`${styles.nav_link}  ${styles.no_decoration}`} activeClassName={styles.active} to='/home'>
						Home
					</NavLink>
					{useLocation().pathname === '/home' && <span className={styles.active_bar}></span>}
				</div>
				<div className={styles.nav_link_container}>
					<NavLink className={`${styles.nav_link}  ${styles.no_decoration}`} activeClassName={`${styles.active}`} to='/about'>
						About
					</NavLink>
					{useLocation().pathname === '/about' && <span className={styles.active_bar}></span>}
				</div>
				<div className={styles.nav_link_container}>
					<NavLink className={`${styles.nav_link}  ${styles.no_decoration}`} activeClassName={`${styles.active}`} to='/hobbies'>
						Hobbies
					</NavLink>
					{useLocation().pathname === '/hobbies' && <span className={styles.active_bar}></span>}
				</div>
				<div className={styles.nav_link_container}>
					{/* <FaGithub /> */}
					<a href="https://github.com/robyconlay/homepage" target='_blank' className={`${styles.nav_link}  ${styles.no_decoration}`}>
						Source
					</a>
					<BiLinkExternal style={{ color: 'white' }} />
				</div>
			</nav>
			<ThemeSwitcher theme={theme} setTheme={setTheme} />
		</header>
	)
}

