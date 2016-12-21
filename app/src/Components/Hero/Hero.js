import React, { Component } from 'react';
import { Link } from 'react-router';
import './Hero.css';

class Hero extends Component {
	componentDidMount() {
		document.body.classList.add('has-hero');
	}
	componentWillUnmount() {
		document.body.classList.remove('has-hero');
	}
	render() {
		return (
			<div className="hero">
				<img src={this.props.src} role="presentation" />
				<div className="hero-content">
					<div className="hero-header">{this.props.header}</div>
					{this.props.subheader !== '' &&(
						<div className="hero-sub-header">{this.props.subheader}</div>
					)}
					{this.props.link.label !== '' && (
						<Link to={this.props.link.href} className="hero-button">{this.props.link.label}</Link>
					)}
				</div>
			</div>
		);
	}
}
Hero.propTypes = {
	src: React.PropTypes.string.isRequired,
	header: React.PropTypes.string,
	subheader: React.PropTypes.string,
	link: React.PropTypes.shape({
		label: React.PropTypes.string,
		href: React.PropTypes.string
	})
};
Hero.defaultProps = {
	src: '',
	header: '',
	subheader: '',
	link: {
		label: '',
		href: ''
	}
};

export default Hero;