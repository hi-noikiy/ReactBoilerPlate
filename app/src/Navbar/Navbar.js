import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../img/Logo';
import './Navbar.css';

class Navbar extends Component {

	componentDidMount() {
		window.addEventListener('scroll', function(e){
			if(!document.getElementById('drawer').classList.contains('open'))
			{
				var navbar = document.getElementById('navbar');
				var drawer = document.getElementById('drawer');
				if(window.scrollY > navbar.offsetHeight && drawer.className !== 'open'){
					navbar.classList.add('scrolled');
				} else if (navbar.classList.contains('scrolled')){
					navbar.classList.remove('scrolled');
				}
			}
		});
	}
	handleHomeClick(){
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
		var linkList = links.map((link, i) => <Link to={link.url} key={i}>{link.label}</Link>);
		return (
			<nav className="Navbar" id="navbar">
				<div className="left-nav">
					<Link to="/" className="home-link" onClick={this.handleHomeClick}>
						<Logo />
					</Link>
				</div>
				<div className="right-nav">
					{linkList}
				</div>
			</nav>
		);
	}
}

export default Navbar;