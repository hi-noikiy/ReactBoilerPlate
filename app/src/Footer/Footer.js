import React, { Component } from 'react';
import Logo from '../img/Logo';
import './Footer.css';

class Footer extends Component {
	render() {
		var socialLinks = [
			{url: 'https://github.com/znewton', label: 'znewton'},
			{url: 'https://www.facebook.com/zach.newton.16', label: 'Zach Newton'},
			{url: 'https://twitter.com/Figgynewts6', label: 'Figgynewts6'},
			{url: 'https://www.instagram.com/figgynewts6', label: 'figgynewts6'},
		];
		var socialLinkList = socialLinks.map((link, i) => <a href={link.url} key={i}>{link.label}</a>);
		return (
			<footer className="Footer" id="footer">
				<div className="footer-section footer-info">
					<a href="/"><Logo/></a>
					<a href="mailto:znewton13@gmail.com">znewton13@gmail.com</a>
				</div>
				<div className="footer-section footer-social">
					{socialLinkList}
				</div>
			</footer>
		);
	}
}

export default Footer;