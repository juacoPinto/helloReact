import React, { Fragment } from "react";
import { Card } from "./components/Card";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

function App() {
	return (
		<Fragment>
			<NavBar />
			<Main />
			<div className="container d-flex">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</Fragment>
	);
}

export default App;
