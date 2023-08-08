import Graph from "./Graph";
import Exhibit from "./Exhibit/Exhibit";
import IpFinder from "./IpFinder/IpFinder";
import Latency from "./LatencyDisplay/Latency";
export default function MainBody() {
	const socket = new WebSocket("ws://localhost:55455");

	return (
		<div className="main__body">
			<div className="body__graph">
				<Exhibit title={"IPv4"} content={<IpFinder type={"v4"} />} />
				<Exhibit title={"IPv6"} content={<IpFinder type={"v6"} />} />
				<Exhibit title={"Latency"} content={<Latency socket={socket} />} />
			</div>
		</div>
	);
}
