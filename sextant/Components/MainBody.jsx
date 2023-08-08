import Graph from "./Graph";
import Exhibit from "./Exhibit/Exhibit";
import IpFinder from "./IpFinder/IpFinder";
export default function MainBody() {
	return (
		<div className="main__body">
			<div className="body__graph">
				<Exhibit title={"IPv4"} content={<IpFinder type={"v4"} />} />
				<Exhibit title={"IPv6"} content={<IpFinder type={"v6"} />} />
			</div>
		</div>
	);
}
