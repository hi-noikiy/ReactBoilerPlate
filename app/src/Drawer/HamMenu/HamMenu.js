import React, { Component } from 'react';
import './HamMenu.css';

class HamMenu extends Component {

	onClick() {
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
		return (
			<div id="ham-menu" onClick={this.onClick}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		);
	}
}

export default HamMenu;