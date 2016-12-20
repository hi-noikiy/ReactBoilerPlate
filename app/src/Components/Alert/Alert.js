import React, { Component } from 'react';
import '../Clickable.css';
import '../Collapseable.css';
import './Alert.css';

class Alert extends Component {
	onClick(e) {
		var collapse = e.target.getElementsByClassName('collapse-toggle');

		if(!collapse) { return; }
		else { collapse=collapse[0]; }

		if(collapse.classList.contains('collapsed')){
			collapse.classList.remove('collapsed');
		} else {
			collapse.classList.add('collapsed');
		}
	}
	render() {
		var alert_class = "alert alert-" +
							this.props.type + " " +
							(this.props.description !== '' ? 'clickable' : '');
		return (
			<div className={alert_class} onClick={this.onClick}>
				<i className="fa fa-exclamation-circle fa-fw"></i>{this.props.message}
				{this.props.description !== '' &&
					<div className="alert-description collapse-toggle collapsed">
						{this.props.description}
					</div>
				}
			</div>
		);
	}
}
Alert.propTypes = {
	type: React.PropTypes.oneOf(['default', 'warning', 'info', 'error', 'success']),
	message: React.PropTypes.string.isRequired,
	description: React.PropTypes.string
};
Alert.defaultProps = {
	type: 'default',
	messsage: '',
	description: ''
};

export default Alert;