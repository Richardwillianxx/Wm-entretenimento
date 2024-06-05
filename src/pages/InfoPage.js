import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import '../csss/info.css';


function InfoPage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  let [data, setData] = useState({
    imagens: []
  });

  

  useEffect(() => {


    async function requests() {
      try {
        const response = await axios.get('http://143.198.156.185/api/filmes/porid/2');
        setData(response.data);
        console.log(response.data);


      } catch (error) {
        console.error("Erro identificado: ", error)
      }


    } requests();

  }, []);

  //   const novaURLDaImagem = {data.imagens.url};
  //   document.body.style.backgroundImage = `url('${novaURLDaImagem}')`;

 {/* { {data.imagens.map((imagem) => (
              <img src={imagem.url} />
            ))} } */}


          
  return (
    <Container className="custom-container principal">


      <div className="pagina">
        <div className="faix1">
            <div className="img">
                  <img src={data.url_thumbnail}/>
              </div>
            <div className="img2">

              <div className="para2">
                 <p> {data.titulo} </p>
              </div>
              <div className="para1">
                 <p>Assistir {data.titulo} Online  <br></br>
                 Duração : {data.qtd_valor} minutos <br></br>
                 Categoria : {data.categoria}   </p>
              </div>
             <div className="para4">
                     <div className="botoes-especiais">{data.qtd_favoritos} ❤️</div>
                     
             </div>
           
                  <div className="para3">
                    <p> {data.sinopse} </p>
                  </div>
              
            </div>
            <div className="img3">
              
              </div>
        </div>
        <div className="faix2">
          
          </div>
         
      </div>



    </Container>
  );


} export default InfoPage;
