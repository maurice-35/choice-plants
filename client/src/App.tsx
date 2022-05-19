import React, { useEffect } from "react";
import axios from "axios";
import { Card, CardGroup, Row } from "react-bootstrap";

const App = () => {
	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('/api/plants/')
				console.log(data)
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
							<h1>Hello World</h1>
						</Card>
					</CardGroup>
				</Row>
			</div>
		</section>
	);
};

export default App;
