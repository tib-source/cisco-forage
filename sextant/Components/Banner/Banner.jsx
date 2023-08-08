import "./Banner.css";

export default function Banner({ title }) {
	return (
		<div className="app__banner">
			<h1>{title}</h1>
		</div>
	);
}
