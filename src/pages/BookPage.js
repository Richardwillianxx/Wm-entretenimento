import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
import '../csss/book.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LivrosPage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [data, setData] = useState([]);


  useEffect(() => {


    async function requests() {
      try {
        const response = await axios.get('http://143.198.156.185/api/livros');
        setData(response.data);
        console.log(response.data);

      } catch (error) {
        console.error("Erro identificado: ", error)
      }


    } requests();

  }, []);







  return (
    <Container className="custom-container">
    <div className='agatres'>
      <h3 >Acompanhe nosso catálogo de livros : </h3></div>
      <Slider {...settings} className="custom-slider">
      
      {data.map((item) => (
                <div className="sliderzinhos">
                    <div className='cartazNovo' >
                    <div className='imagemCartaz'>
                      <img src={item.url_thumbnail}/>
                    </div>
                    <div className='textoCartazNovo'>
                         <p>{item.titulo}</p>
                         <a href={item.url_video} target="_blank" >Ver </a>
                    </div>
                   </div>
               </div>
            
             ))} 
          {data.map((item) => (
                <div className="sliderzinhos">
                    <div className='cartazNovo' >
                    <div className='imagemCartaz'>
                      <img src={item.url_thumbnail}/>
                    </div>
                    <div className='textoCartazNovo'>
                        <p>{item.titulo}</p>
                        <a href={item.url_video} target="_blank" >Ver filme</a>  
                    </div>
                   </div>
               </div>
            
             ))} 
  
   
    </Slider>
    <Slider {...settings} className="custom-slider">
      
      {data.map((item) => (
                <div className="sliderzinhos">
                    <div className='cartazNovo' >
                    <div className='imagemCartaz'>
                      <img src={item.url_thumbnail}/>
                    </div>
                    <div className='textoCartazNovo'>
                         <p>{item.titulo}</p>
                         <a href={item.url_video} target="_blank" >Ver </a>
                    </div>
                   </div>
               </div>
            
             ))} 
          {data.map((item) => (
                <div className="sliderzinhos">
                    <div className='cartazNovo' >
                    <div className='imagemCartaz'>
                      <img src={item.url_thumbnail}/>
                    </div>
                    <div className='textoCartazNovo'>
                        <p>{item.titulo}</p>
                        <a href={item.url_video} target="_blank" >Ver filme</a>  
                    </div>
                   </div>
               </div>
            
             ))} 
  
   
    </Slider>
    <Slider {...settings} className="custom-slider">
      
      {data.map((item) => (
                <div className="sliderzinhos">
                    <div className='cartazNovo' >
                    <div className='imagemCartaz'>
                      <img src={item.url_thumbnail}/>
                    </div>
                    <div className='textoCartazNovo'>
                         <p>{item.titulo}</p>
                         <a href={item.url_video} target="_blank" >Ver </a>
                    </div>
                   </div>
               </div>
            
             ))} 
          {data.map((item) => (
                <div className="sliderzinhos">
                    <div className='cartazNovo' >
                    <div className='imagemCartaz'>
                      <img src={item.url_thumbnail}/>
                    </div>
                    <div className='textoCartazNovo'>
                        <p>{item.titulo}</p>
                        <a href={item.url_video} target="_blank" >Ver filme</a>  
                    </div>
                   </div>
               </div>
            
             ))} 
  
   
    </Slider>
    </Container>
  );
}export default LivrosPage;