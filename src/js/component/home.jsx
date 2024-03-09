import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MyNavbar from './navbar'
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<MyNavbar />
			<Jumbotron />
			
		</div>

	);
};





export default Home;
