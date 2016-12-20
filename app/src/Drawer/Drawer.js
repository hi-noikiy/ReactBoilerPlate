import React, { Component } from 'react';
import HamMenu from './HamMenu/HamMenu';
import './Drawer.css';

class Drawer extends Component {
	render() {
		var links = [
			{url:'/about', label: 'About'},
			{url:'/components', label: 'Components'},
			{url:'/documentation', label: 'Documentation'},
			{url:'/test', label: 'Test'}
		];
		var linkList = links.map((link, i) => <a href={link.url} key={i}>{link.label}</a>);
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