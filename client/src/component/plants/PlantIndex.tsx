import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardGroup, Row } from "react-bootstrap";

const PlantIndex = () => {
	const [plant, setPlant] = useState([] as any[])

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('/api/plants/')
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
				<Row className="grid-container">
					<CardGroup>
						<Card id="plant">
							<div>
								{plant.map(item => {
									return <>
									<p key={item.id}>{item.name}</p>
									<img src={item.image} alt={item.name}></img>
									</>
							})}
							</div>
						</Card>
					</CardGroup>
				</Row>
			</div>
		</section>
	);
};

export default PlantIndex;
