import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img scr="https://static2.upao.edu.pe/5/1693524345PRINCIPAL.jpg"> class="d-block w-100" alt="..."</img>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img scr="https://static2.upao.edu.pe/5/1693524345PRINCIPAL.jpg"> class="d-block w-100" alt="..."</img>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img scr="https://static2.upao.edu.pe/5/1693524345PRINCIPAL.jpg"> class="d-block w-100" alt="..."</img>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;