import React, { Component } from 'react';
import { Link } from 'react-router';
import HamMenu from './HamMenu/HamMenu';
import './Drawer.css';

class Drawer extends Component {
	handleClick() {
		var ham = document.getElementById('ham-menu');
		var drawer = document.getElementById('drawer');
		var navbar =  document.getElementById('navbar');
		if(ham.className === '') {
			drawer.classList.add('open');
			ham.className = 'open';
			navbar.classList.add('scrolled');
		} else {
			drawer.classList.remove('open');
			ham.className = '';
			if(window.scrollY > navbar.offsetHeight && drawer.className !== 'open'){
				navbar.classList.add('scrolled');
			} else if (navbar.classList.contains('scrolled')) {
				navbar.classList.remove('scrolled');
			}
		}
	}
	render() {
		var links = [
			{url:'/about', label: 'About'},
			{url:'/components', label: 'Components'},
			{url:'/documentation', label: 'Documentation'},
			{url:'/test', label: 'Test'}
		];
		var linkList = links.map((link, i) => <Link to={link.url} key={i} onClick={this.handleClick.bind(this)}>{link.label}</Link>);
		return (
			<div className="Drawer">
				<HamMenu/>
				<nav id="drawer">
					{linkList}
				</nav>
			</div>
		);
	}
}

export default Drawer;