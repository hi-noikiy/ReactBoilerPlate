import React, { Component } from 'react';
import Hero from '../Components/Hero/Hero';
import hero_img from '../img/hero-medium.jpg';

class FourOFour extends Component {
	render() {
		return (
			<div>
				<Hero src={hero_img}
					  header="404"
					  subheader="Oops - Page not found!"
					  link={{label:'Back to safety', href:'/'}}/>
			</div>
		);
	}
}

export default FourOFour;