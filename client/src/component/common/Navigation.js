import React from 'react'
import { Nav } from 'react-bootstrap'


const Navigation = () => {

	return (
		<>
			<Nav className="justify-content-center" activeKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">🌺</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/plants">Plants</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/register">Register</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/login">Login</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/home">Home</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	)

}

export default Navigation