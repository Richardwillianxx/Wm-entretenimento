  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Container } from "react-bootstrap";
  import '../csss/mais.css';


  function MaisPage() {
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
          const response = await axios.get('http://143.198.156.185/api/filmes/porid/3');
          setData(response.data);
          console.log(response.data);



          if (response.data.imagens.length > 0) {
            const backgroundImageUrl = response.data.imagens[0].url;
            const pagina1 = document.querySelector('.pagina1');
            pagina1.style.position = 'relative';
            pagina1.style.overflow = 'hidden';
  
            const beforeStyle = `
              .pagina1::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(${backgroundImageUrl});
                background-size: cover;
                background-position: center;
                opacity: 0.5; /* Ajuste a opacidade aqui */
                z-index: -1;
              }
            `;
  
            const styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.innerText = beforeStyle;
            document.head.appendChild(styleSheet);
          }
  

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


        <div className="pagina1" >
          
                  <div className="parte1">
                      <div className="parte11">
                              <div className="img">
                                  <img src={data.url_thumbnail}/>
                              </div>    
                      </div>
                      <div className="parte12">
                              <div className="parte121">
                                  <div className="parte1211">
                                      <div className="parte12111">
                                                  <p> {data.titulo} </p>
                                          </div>
                                          <div className="parte12112">
                                              <p>
                                                  Assistir {data.titulo} Online  <br></br>
                                                  Duração : {data.qtd_valor} minutos <br></br>
                                                  Categoria : {data.categoria} 
                                              </p>
                                          </div> 
                                          <div className="parte12113">
                                              <div className="curtidas">{data.qtd_favoritos} ❤️</div>
                                          </div>   
                                  </div>
                                  <div className="parte1212">
                                  <p> {data.sinopse} </p>
                                  </div> 
                              </div> 
                              <div className="parte122">
                              
                              </div>
                      </div>
                    
                  </div>
                  <div className="parte2">
                      
                  </div>
        </div>



      </Container>
    );


  } export default MaisPage;
