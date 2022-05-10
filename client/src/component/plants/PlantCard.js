import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PlantCard = ({ id, name, image, description, owner, comment }) => {

	return (
		<div className="container2">
			<Card.Img variant="top" src={image} alt={name} />
			<Link to={`/plants/${id}`}>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
				</Card.Body>
			</Link>
		</div>
	)

}

export default PlantCard;
