import React, { useEffect } from 'react'
import axios from 'axios'

const PlantIndex = () => {

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get('/api/plants/')
				console.log('DATA', data)
			} catch (err) {
			}
		}
		getData()
	}, [])

	return (
		<section>
			<div>
				<h1>Plant Index</h1>
			</div>
		</section>
	)
}

export default PlantIndex