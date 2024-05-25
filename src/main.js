import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Upao from './data/upao.json'
import { useNavigate } from 'react-router-dom';
import './style.css';

const feather = require('feather-icons');

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <Container className="col-8 text-white">
            <Row className="justify-content-center">
                <Col>
                <li>
                <h1 className="text-center text-e6110a">Bienvenido a Burguer Factory</h1>
                </li>
                <div className="text-center">
                        <img src="https://cdn-icons-png.freepik.com/512/7763/7763590.png?ga=GA1.1.1025787723.1713711527" alt="Burguer Factory" style={{ width: '450px', height: '450px' }} />
                    </div>
                    
                    <Carousel>
                        {Productos.map(it => (
                            <Carousel.Item onClick={(e) => {
                                e.preventDefault(); handleClick(it.slug)
                            }}>
                                <img className="d-block w-100" src={it.picture} alt={it.name} />
                                <Carousel.Caption>
                                    <h3>{it.name}</h3>
                                    <p>{it.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    <div className="py-4">
                        <p>¡¡Bienvenid@s a BURGER FACTORY! Donde la pasión por las hamburguesas se convierte en una experiencia inolvidable. Nos enorgullecemos de ofrecerte las mejores hamburguesas artesanales, preparadas con ingredientes frescos y de la más alta calidad. Ya sea que estés buscando un clásico delicioso o una creación innovadora, en BURGER FACTORY tenemos algo para todos los gustos. ¡Ven y disfruta de un ambiente acogedor, un servicio excepcional y, por supuesto, las hamburguesas más jugosas y sabrosas de la ciudad! ¡Te esperamos para compartir momentos deliciosos y memorables!</p>
                        <ul style={{ listStyleType: 'none' }}>    
                            <li>
                                <strong>Conoce nuestra historia</strong> <p>En un rincón animado de la ciudad, dos amigos decidieron convertir su amor por las hamburguesas en un sueño hecho realidad: **BURGER FACTORY**. Con cada bocado, compartían su pasión por la comida reconfortante y la buena compañía, convirtiendo su pequeño local en el lugar favorito de la comunidad para disfrutar de hamburguesas deliciosas y momentos inolvidables.</p>
                            </li>
                            <li>
                                <strong>Visita nuestra comunidad</strong> <p>Vista nuestras redes sociales para estar al tanto de los post y las mejores.</p>
                            </li>
                        </ul>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Main;