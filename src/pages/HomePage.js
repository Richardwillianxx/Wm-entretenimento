
import SliderComponent from "../components/SliderComponent";
import '../csss/home.css';
import tec from '../image/tecn.png'
import familia from '../image/familia.png'
import book from '../image/book.png'
import CardFilmesComponent from "../components/CardFIlmeComponent";
import CardLivrosComponent from "../components/CardLivroComponent";
import FooterComponent from '../components/FooterComponent';

function HomePage(){

    return(
        <div className="tudo">
            <div className="faixa1">
                <div className="faixa1-Centro">
                    <SliderComponent/>
                </div>

            </div>

            <div className="faixa2">
                    <div className="container-xxl central2 ">
                
                        <div className="centroFaixa2">
                            <div className="faixa2-1">
                                <div className="retan1">
                                    <img className="topicos" src={tec}/>    
                                </div>
                                <div className="retan2">
                                    <h6>Assista de onde Quiser</h6 >
                                    <p>Filmes e séries quiser no celular, tablet, laptop e TV.</p>
                                </div>
                            </div>
                            <div className="faixa2-2">
                            <div className="retan1">
                                     <img className="topicos retanbook" src={book}/> 
                            </div>
                                <div className="retan2">
                                    <h6>Temos a área de livros também!</h6>
                                </div>
                            </div>
                            <div className="faixa2-3"> 
                              <div className="retan1">
                              <img className="topicos" src={familia}/>   
                                </div>
                                <div className="retan2">
                                    <h6>Comparttilhe com um amigo, familia ou namorado</h6>
                                </div>

                            </div>
                        </div>
                    </div>
             </div>   
                    <div className="faixa3"> 
                      
                        <div className="cardzinho">
                             <div className="NomesTitulos">
                                {/* <h4>Filmes</h4> */}
                             </div>
                             <CardFilmesComponent/>
                        </div>
                    </div>
                
                    <div className="faixa4">
                        <div className="cardzinho">
                                <CardLivrosComponent/>
                            </div>
                    </div>
                
                    <div className="faixa5"></div>
                
                        <FooterComponent/> 
        </div>


    );


}export default HomePage;