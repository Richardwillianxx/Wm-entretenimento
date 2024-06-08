import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button,Card,Col,Row } from 'react-bootstrap';
import acaba from'../image/acaba.jpg'
import amor from '../image/amor.jpg'
import pequeno from '../image/pequeno.jpg'
import george from '../image/george.jpg'
import rico from '../image/rico.jpg'
import star from '../image/star.jpg'
import habitos from '../image/hab.jpg'
import pep from '../image/pepjpg.jpg'
import avesso from '../image/avesso.jpg'
import pedra from '../image/pedraFilosofal.jpg'



function CardLivrosComponent(){

return(

                       
  <Carousel >
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <div className='cartaz' >

                                            <div className='imagemCartaz'>
                                               <img src={acaba}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                <div className='texto1'> <p className='nomeProvisório'> É assim que acaba</p></div>
                                                <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                               
                                            </div>
                                     
                                        </div>
                                    </Col>
                                       <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                               <img src={amor}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                    <div className='texto1'> <p className='nomeProvisório'> Amor & gelato</p></div>
                                                    <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={george}/>  
                                            </div>
                                            <div className='textoCartaz'>
                                                 <div className='texto1'> <p className='nomeProvisório'> 1984</p></div>
                                                 <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                               <img src={pequeno}/>   
                                            </div>
                                            <div className='textoCartaz'>
                                                 <div className='texto1'> <p className='nomeProvisório'> O pequeno príncipe</p></div>
                                                 <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                 <img src={rico}/>
                                            </div>
                                            <div className='textoCartaz '>
                                                    <div className='texto1'> <p className='nomeProvisório arrumandoTextoCartaz'> O homem mais rico da babilônia</p></div>
                                                    <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
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
                                               <img src={star}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                 <div className='texto1'> <p className='nomeProvisório'> A culpa é das estrelas</p></div>
                                                 <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={habitos}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                 <div className='texto1'> <p className='nomeProvisório'> 7 hábitos eficazes</p></div>
                                                 <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                <img src={pep}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                 <div className='texto1'> <p className='nomeProvisório'>Guardiola</p></div>
                                                 <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                                       <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                               <img src={avesso}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                 <div className='texto1'> <p className='nomeProvisório'> O avesso da pele  </p></div>
                                                  <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cartaz' >
                                            <div className='imagemCartaz'>
                                                     <img src={pedra}/>
                                            </div>
                                            <div className='textoCartaz'>
                                                 <div className='texto1'> <p className='nomeProvisório'> HP : Pedra filosofal</p></div>
                                                 <div className='texto2'><p className='linkProvisório'> Ver livro</p></div>
                                            </div>
                                     
                                        </div>
                                    </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>

                 

);


}export default CardLivrosComponent;