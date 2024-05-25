import Carousel from 'react-bootstrap/Carousel';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const gatos = [
    {
        name: "Preparados para los retos de la vida",
        description: "Competencia",
        picture: 'https://static2.upao.edu.pe/5/1667857684PRINCIPAL.jpg'
    },
    {
        name: "Diviendonos con nuestra mascota",
        description: "Atención",
        picture: 'https://static2.upao.edu.pe/5/1693524345PRINCIPAL.jpg'
    },
    {
        name: "Apoyamos la creatividad",
        description: "Imaginacion",
        picture: 'https://static2.upao.edu.pe/5/1686347869PRINCIPAL.jpg'
    },
];

const Main = () => {
    return <main>
        <Carousel>
            {
                gatos.map(it => {
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
