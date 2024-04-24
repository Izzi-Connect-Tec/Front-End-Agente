// Container with the description and information of the client
import "../styles/client.css"
import FolderList from "./HistorialCliente";


const Client = (props) => {
    return (
        <div className="client-container">
            <div className="titulo-cliente">
                <h2>Cliente</h2>
            </div>
            <div className="client-div">
                <p>Nombre: Joahan Lecona</p>
                <p>Localidad: Atizapan de Zaragoza</p>
                <p>Plan contratado: Izzi Basic $150</p>
                <h2>Historial de atención:</h2>
                {/* <ul>
                    <li>Problemas con internet.</li>
                    <li>Sin señal</li>
                    <li>Problemas con internet.</li>
                </ul> */}
                <FolderList/>
            </div>
        </div>
    );
}

export default Client;