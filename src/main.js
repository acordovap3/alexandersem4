import Carousel from 'react-bootstrap/Carousel';


const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const gatos = [
    {
        name: "Preparados para los retos de la vida",
        description: "Con cursos extracurriculares para los mas destacados",
        picture: 'https://static2.upao.edu.pe/5/1667857684PRINCIPAL.jpg'
    },
    {
        name: "Diviendonos con nuestra mascota",
        description: "La cordialidad ante todo",
        picture: 'https://static2.upao.edu.pe/5/1693524345PRINCIPAL.jpg'
    },
    {
        name: "Innovando cada dia",
        description: "Visita nuestras instalaciones",
        picture: 'https://static2.upao.edu.pe/5/1681338770PRINCIPAL%20(2).jpg'
    },
];

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }
    
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