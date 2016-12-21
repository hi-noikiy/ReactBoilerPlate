import React, { Component } from 'react';
import './InputRange.css';

class InputRange extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: this.props.value
		};
		this.handleInput = this.handleInput.bind(this);
	}
	componentDidMount() {
		var range = document.getElementById(this.props.id);
		var valueIndicator = range.parentElement.getElementsByClassName('range-val')[0];
		valueIndicator.innerHTML = range.value;
	}
	handleInput(e) {
		var valueIndicator = e.target.parentElement.getElementsByClassName('range-val')[0];
		valueIndicator.innerHTML = e.target.value;
		this.setState({value: e.target.value});
	}
	render() {
		return (
			<div className="form-element-range">
				<label htmlFor={this.props.id}>
					{this.props.label}: <span className="range-val"></span>
				</label>
				<input
					id={this.props.id}
					type="range"
					name={this.props.name}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					value={this.state.value}
					onChange={this.handleInput}
					onMouseMove={this.handleInput}
					onTouchMove={this.handleInput}
				/>
				<div id={this.props.id+"-range-id"} className="range-indicator"></div>
			</div>
		);
	}
}
InputRange.propTypes = {
	id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	value: React.PropTypes.number,
};
InputRange.defaultProps = {
	id: 'InputRange'+Math.floor(Math.random()*1000),
	label: '',
	name: 'InputRangeName'+Math.floor(Math.random()*1000),
	min: 0,
	max: 10,
	step: 1,
	value: 5
};

export default InputRange;