import React, { useEffect, useState } from "react";

export default function IpFinder({ type, Child, childProps }) {
	const [ip, setIp] = useState("");

	useEffect(() => {
		const requestLink =
			type == "v4"
				? "https://api.ipify.org?format=json"
				: "https://api64.ipify.org?format=json";
		fetch(requestLink)
			.then((data) => data.json())
			.then((result) => {
				setIp(result.ip);
				console.log(result.ip);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div>
			<h2>{ip || "Loading..."}</h2>
		</div>
	);
}
