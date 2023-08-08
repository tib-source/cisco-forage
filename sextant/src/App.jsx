import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "../Components/Banner/Banner";
import MainBody from "../Components/MainBody";
function App() {
	return (
		<div className="root">
			<Banner title={"Sexant"} />
			<MainBody />
		</div>
	);
}

export default App;
