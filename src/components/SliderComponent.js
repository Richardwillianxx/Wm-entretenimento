import React from 'react'
import {Carousel} from 'react-bootstrap'
import deadpool from '../image/deadpool.jpg'
import macaco from '../image/macaco.png'
import divertido from '../image/divertido.jpeg'
import duna from  '../image/duna.jpg'
import esposa from '../image/esposa.jpg'

const SliderComponent = () => {
    return (
        <div className='Slider-Geral'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={macaco}
                        alt="Macaco"
                    />
                    <Carousel.Caption>
                        <h3>Planetas do macaco: O reinado</h3>
                        <p>Somente no cinema e no WM filmes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={deadpool}
                        alt="Deadpool"
                    />
                    <Carousel.Caption>  
                        <h3>Deadpool 3</h3>
                        <p>Somente nos cinemas e no WM filmes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={divertido}
                        alt="Divertidamente"
                    />
                    <Carousel.Caption>
                        <h3>Divertidamente 2</h3>
                        <p>Somente nos cinemas e no WM filmes</p>
                    </Carousel.Caption>
                </Carousel.Item>
              
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={duna}
                        alt="Duna"
                    />
                    <Carousel.Caption>
                        <h3>Duna</h3>
                        <p>Somente nos cinemas e no WM filmes</p>
                    </Carousel.Caption>
                </Carousel.Item> <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={esposa}
                        alt="Esposa "
                    />
                    <Carousel.Caption>
                        <h3>Esposa de mentirinha</h3>
                        <p>Somente no WM filmes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SliderComponent;
