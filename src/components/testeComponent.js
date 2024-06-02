import axios from "axios";
import { useEffect, useState } from "react";
import '../csss/teste.css';
import Carousel from 'react-bootstrap/Carousel';
import { Col,Row } from 'react-bootstrap';


function Teste() {

  const [data, setData] = useState([]);


  useEffect(() => {


    async function requests() {
      try {
        const response = await axios.get('http://143.198.156.185/api/home');
        setData(response.data);

      } catch (error) {
        console.error("Erro identificado: ", error)
      }


    } requests();

  }, []);

  return (
    <div className="todosFilmes">
    <div className="filmes1">
    <Carousel >
      <Carousel.Item>
          <Row>
              {data.map((item) => (
              <Col>
                <div className='cartaz' >
                <div className='imagemCartaz'>
                   <img src={item.url_thumbnail}/>
               </div>
               <div className='textoCartaz'>
              </div>
              </div>
            </Col>
             ))} 
          </Row>
     </Carousel.Item>
   </Carousel>

    </div>

    <div className="filmes2">
    <Carousel >
      <Carousel.Item>
          <Row>
              {data.map((item) => (
              <Col>
                <div className='cartaz' >
                <div className='imagemCartaz'>
                   <img src={item.url_thumbnail}/>
               </div>
               <div className='textoCartaz'>
              </div>
              </div>
            </Col>
             ))} 
          </Row>
     </Carousel.Item>
   </Carousel>

    </div>

    <div className="filmes3">
    <Carousel >
      <Carousel.Item>
          <Row>
              {data.map((item) => (
              <Col>
                <div className='cartaz' >
                <div className='imagemCartaz'>
                   <img src={item.url_thumbnail}/>
               </div>
               <div className='textoCartaz'>
              </div>
              </div>
            </Col>
             ))} 
          </Row>
     </Carousel.Item>
   </Carousel>

    </div>
   
</div>

  )

}
export default Teste;
