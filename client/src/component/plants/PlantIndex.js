import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardGroup, Row } from 'react-bootstrap'


const PlantIndex = () => {
	const [plants, setPlants] = useState([])

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('/api/plants/')
				console.log('DATA', data)
				setPlants(data)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, [])

	return (
		<section className="section">
      <div className="container">
			<Row className="grid-container">
				<CardGroup>
					<Card>
						{plants.map(plant => {
							return(
										<>
									<Card.Body key={plant._id}>
										<Card.Title>{plant.name}</Card.Title>
									</Card.Body><Card.Img variant="top" src={plant.image} alt={plant.name} /></>
							)
						})}
					</Card>
				</CardGroup>
			</Row>
      </div>
    </section>
	)
}

export default PlantIndex