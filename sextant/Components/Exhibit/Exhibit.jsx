import React from "react";
import "./Exhibit.css";
export default function Exhibit({ title, content }) {
	return (
		<div className="exhibit">
			<h2>{title}</h2>
			<div className="exhibit__content">{content}</div>
		</div>
	);
}
