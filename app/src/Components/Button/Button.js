import React, { Component } from 'react';
import '../Clickable.css';
import './Button.css';

class Button extends Component {
	render() {
		var button_class = 'btn btn-' + this.props.type + ' clickable';
		var icon = this.props.icon !== '' ? (
			<i className={"fa fa-"+this.props.icon} aria-hidden="true"></i>
		) : '';
		return (
			<button className={button_class}>
				{icon} {this.props.label}
			</button>
		);
	}
}
Button.propTypes = {
	label: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['default', 'primary', 'warning', 'danger', 'success']),
	icon: React.PropTypes.string
};
Button.defaultProps = {
	label: '',
	type: 'default',
	icon: ''
};

export default Button;