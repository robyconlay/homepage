import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import NavLinkContainer from '../NavLinkContainer/NavLinkContainer';

import { useTheme } from '../../ThemeContext';

import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

import styles from './Header.module.css'

export default function Header() {
	const theme = useTheme();

	return (
		<header style={{ backgroundColor: theme.header.backgroundColor }}>
			<nav>
				<NavLinkContainer name='Roberto Mazzalai' path='/' />
				<NavLinkContainer name='Home' path='/home' />
				<NavLinkContainer name='About' path='/about' />
				<NavLinkContainer name='Hobbies' path='/hobbies' />

				<div className={styles.nav_link_container} style={{ color: theme.header.color }} >
					{/* <FaGithub /> */}
					<a href="https://github.com/robyconlay/homepage" target='_blank' className={`${styles.nav_link}  ${styles.no_decoration}`} style={{ color: theme.header.color }} >
						Source
					</a>
					<BiLinkExternal style={{ color: theme.header.color }} />
				</div>
				
			</nav>
			<ThemeSwitcher />
		</header>
	)
}

