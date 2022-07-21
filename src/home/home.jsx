import { Carousel } from "react-bootstrap";
import productsObj from "../utils/products"
import HorizontalScroll from "../utils/horizontalScroll";
import NavBar from "../utils/navBar";
import "../style/carousel.css"

function Home() {
  
    return (
      <div>
        <NavBar />
        <Carousel>
            <Carousel.Item>
                <img className="img-carousel" src="https://viacarreira.com/wp-content/uploads/2019/08/programa-de-trainee-atakarejo-inscreve-para-processo-seletivo-.jpg" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-carousel"src="https://www.turismoemibirama.sc.gov.br/img/places/65.jpg" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-carousel"src="https://www.acats.org.br/wp-content/uploads/2020/10/Cooper_Jaragua_1710-1024x682.jpg" alt="" />
            </Carousel.Item>
        </Carousel>
          <div>
              <section>
                <div>
                  <h3>Recomendado</h3>
                </div>
                <HorizontalScroll items={productsObj}/>
              </section>
              <section>
                <div>
                  <h3>Ofertas</h3>
                </div>
                <HorizontalScroll items={productsObj}/>
              </section>
          </div>
      </div>
    );
  }

export default Home;
  