import React from 'react';

import ThemeSwitcher from './ThemeSwitcher';
import NavLinkContainer from './NavLinkContainer';

import { useTheme } from '../ThemeContext';

import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

import styled from 'styled-components';

export default function Header() {
	const theme = useTheme();

	return (
		<HeaderContainer style={{ backgroundColor: theme.header.backgroundColor }}>
			<Nav>
				<NavLinkContainer name='Roberto Mazzalai' path='/' />
				<NavLinkContainer name='Home' path='/home' />
				<NavLinkContainer name='About' path='/about' />
				<NavLinkContainer name='Hobbies' path='/hobbies' />

				<NavLinkDiv style={{ color: theme.header.color }} >
					{/* <FaGithub /> */}
					<NavLink href="https://github.com/robyconlay/homepage" target='_blank' style={{ color: theme.header.color }} >
						Source
					</NavLink>
					<BiLinkExternal style={{ color: theme.header.color }} />
				</NavLinkDiv>

			</Nav>
			<ThemeSwitcher />
		</HeaderContainer>
	)
}

const HeaderContainer = styled.header`
	display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 4rem;
  max-width: 100vw;
`;

const Nav = styled.nav`
	display: flex;
  flex-direction: row;
`

const NavLinkDiv = styled.div`
	padding: 20px;
  position: relative;
  justify-content: center;
  vertical-align: middle;
`

const NavLink = styled.a`
	padding: 20px;
	text-decoration: none;
	&:hover{
		color: var(--text-color-link);
  /* font-size: 1.1em; */
	}
`