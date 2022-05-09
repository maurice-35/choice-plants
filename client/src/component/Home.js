import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {

  return (
    <section>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-flex carousel justify-content-md-between align-items-md-center"
              src="https://res.cloudinary.com/doe5zwesw/image/upload/v1650742726/p7_axkolv"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nice flower.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/doe5zwesw/image/upload/v1649620127/p-6_jyyz5l.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nice flower.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/doe5zwesw/image/upload/v1650403492/85807-00-BAKIE_bdd1252d-59e7-4fc1-ac20-5ae60eb84dfc_lp1gmv.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Nice flower.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default Home
