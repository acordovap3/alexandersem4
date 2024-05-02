import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Upao from './data/upao.json'

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }
    
    return <main>
        <Carousel>
            {
                upao.map(it => {
                    return (<Carousel.Item onClick={(e) =>{
                      e.preventDefault(); handleClick(it.slug)
                    }}>
                      <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button clasName="btn btn-primary" >Ver detalles</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main>;
}

export default Main;