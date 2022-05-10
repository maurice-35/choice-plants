import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardGroup, Row } from 'react-bootstrap'
import PlantCard from './PlantCard'


const PlantIndex = () => {
	const [plants, setPlants] = useState([])
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('/api/plants/')
				console.log('DATA', data)
				setPlants(data)
			} catch (err) {
				console.log(err)
				setHasError(true)
			}
		}
		getData()
	}, [])

	return (
		<section className="section">
			<div className="container">
				<Row className="grid-container">
					{plants ?
					<CardGroup>
						<Card id="plant">
							{plants.map(plant => (
								<PlantCard key={plant.id} {...plant} />
							))}
						</Card>
					</CardGroup>
					:
					<h2 className="index">
								{hasError ? 'Please wait' : '...loading'}
							</h2>
						}
				</Row>
			</div>
		</section>
	)
}

export default PlantIndex