import proyectos from "../api/projects";

export async function getStaticPaths() {
    const paths = proyectos.map((proyecto) => ({
        params: { id: proyecto.id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const proyecto = proyectos.find((p) => p.id === params.id);

    return { props: { proyecto } };
}

function Proyecto({ proyecto }) {
    return (
        <div>
            <h1>{proyecto.nombre}</h1>
            <p>{proyecto.descripcion}</p>
        </div>
    );
}

export default Proyecto;

