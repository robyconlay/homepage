import React from "react";

import '../App.css'
import { FaGithub } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
export default function Header() {

	return (
		<header>
			<div>
				<NavLink className='nav-link no-decoration' activeClassName='active' to='/'>
					Home
				</NavLink>
			</div>
			<div>
				<NavLink className='nav-link no-decoration' activeClassName='active' to='/works'>
					Works
				</NavLink>
			</div>
			<div>
				<FaGithub />
				<a href="" target='_blank' className="nav-link no-decoration">
					Source
				</a>
			</div>
		</header>
	)
}

