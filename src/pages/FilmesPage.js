import React from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";

function FilmesPage() {
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
        const response = await axios.get('http://143.198.156.185/api/filmes');
        setData(response.data);
        console.log(response.data);

      } catch (error) {
        console.error("Erro identificado: ", error)
      }


    } requests();

  }, []);







  return (
    <Container>
    <Slider {...settings}>
      <div>
      {data.map((item) => (
              
                <div className='cartaz' >
                <div className='imagemCartaz'>
                   <img src={item.url_thumbnail}/>
               </div>
               <div className='textoCartaz'>
              </div>
              </div>
            
             ))} 
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </Container>
  );
}export default FilmesPage;