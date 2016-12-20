import React, { Component } from 'react';
import Hero from '../Components/Hero/Hero';
import hero_img from '../img/hero-medium.jpg';

class Home extends Component {
	render() {
		return (
		<div>
			<Hero src={hero_img}
				  header="Welcome to Newton"
				  subheader="Where design meets functionality"
				  link={{label:'Learn more', href:'/components'}}/>
			<article>
				Hello this is the homepage
			</article>
		</div>
		);
	}
}

export default Home;