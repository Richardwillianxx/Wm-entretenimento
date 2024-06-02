import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button,Card,Col,Row } from 'react-bootstrap';
import macaco from '../image/macaco.png'    
import toy from '../image/toy.png'
import vingadores from '../image/avengers.jpg'
import maze from '../image/maze.jpg'
import garotas from '../image/garotas.jpg'
import guerra from '../image/guerra.jpg'
import rush from '../image/rush.jpg'
import galaxia from '../image/galaxia.jpg'
import panda from '../image/panda.jpg'
import agua from'../image/agua.jpg'
import rio from'../image/rio.jpg'






function CardFilmesComponent(){

return(

                       

                        <Carousel >
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={toy}/>
                                            </div>
                                            <div className='textoCartaz'>

                                            </div>
                                     
                                        </div>
                                    </Col>
                                       <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={vingadores}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                   
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                 <img src={maze}/> 
                                            </div>
                                            <div className='textoCartaz'>
                                                
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={garotas}/> 
                                            </div>
                                            <div className='textoCartaz'>
                                                
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                 <img src={guerra}/> 
                                            </div>
                                            <div className='textoCartaz'>
                                                
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                                <Row>
                                <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={rush}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                 <img src={galaxia}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={panda}/>      
                                            </div>
                                            <div className='textoCartaz'>
                                                    
                                            </div>
                                     
                                        </div>
                                    </Col>
                                       <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={agua}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={rio}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                
                                            </div>
                                     
                                        </div>
                                    </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>

                 

);


}export default CardFilmesComponent;