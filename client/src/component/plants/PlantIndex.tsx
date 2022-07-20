import { useState, useEffect } from "react";
import axios from "axios";

const PlantIndex = () => {
	const [plant, setPlant] = useState([] as any[])

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('/api/plants')
				console.log('DATA', data)
				setPlant(data)
			} catch (err) {
				console.log(err)
			}
		}
		getData();
	}, []);

	return (
		<section className="section">
			<div className="container">
				<div className="grid-container">
						<div id="plant">
							<div className="group">
								{plant.map(item => (
									<div key={item.id}>{item.name}
									<img src={item.image} alt={item.name} />
									</div>
							))}
							</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PlantIndex;
