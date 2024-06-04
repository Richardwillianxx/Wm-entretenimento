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



  return (
    <Container className="custom-container">
 {/* { {data.imagens.map((imagem) => (
              <img src={imagem.url} />
            ))} } */}
      <div className="tudoaqui">
        <div className="faixa1">
          <div className="img">
              <img src={data.url_thumbnail}/>
          </div>


          <div className="segurafaixaOne">
            <div className="faixaone">
                <div className="botoes-especiais">{data.qtd_favoritos} ❤️</div>
                <div className="botoes-especiais">{data.categoria} </div>
                
            </div>
            <div className="faixaone">
              <div className="sinopse">
                  {data.sinopse}
              </div>
              
            </div>
          </div>

        </div>
       
        <div className="sinopse">

        </div>
        <div className="favoritar">

        </div>
      </div>


    </Container>
  );


} export default InfoPage;
