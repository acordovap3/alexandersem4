import Upao from './data/upao.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const Upao = Upao.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{Upao.name}</h1>
        <hr></hr>
        <img src={Upao.picture}></img>
        <p>{Upao.description}</p>
    </>);
}

export default Single;