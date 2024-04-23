// Container with the description and information of the client
import "../styles/client.css"

const Client = (props) => {
    return (
        <div className="client-container">
            <div className="titulo">
                <h2>Cliente</h2>
            </div>
            <div className="client-div">
                <p>Nombre: Joahan Lecona</p>
                <p>Localidad: Atizapan de Zaragoza</p>
                <p>Plan contratado: Izzi Basic $150</p>
                <p>Historial de atención:</p>
                <ul>
                    <li>Problemas con internet.</li>
                    <li>Sin señal</li>
                    <li>Problemas con internet.</li>
                </ul>
            </div>
        </div>
    );
}

export default Client;