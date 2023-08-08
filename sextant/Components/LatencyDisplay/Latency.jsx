import { useState } from "react";

export default function Latency({ socket }) {
	const [latency, setLatency] = useState(0);
	socket.onmessage = (event) => {
		const serverTime = event.data;
		const currentTime = Date.now();
		const difference = currentTime - serverTime;
		setLatency(difference);
	};
	return <h2>{latency}</h2>;
}
