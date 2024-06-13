import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NumbersIcon from '@mui/icons-material/Numbers';
import LinearProgress from '@mui/material/LinearProgress';
import "../styles/icono.css"
import { useLlamadaContext } from '../Providers/LlamadaContext';


export const EstadoLlamada = () => {

    const [call,,,] = useLlamadaContext();

    return(

        <>
        { call.IdLlamada && 
        <section className='completeCall'>

            

            <div className="titulo-llamada">
                Call details
                
                {/* <div className="dataClient" id='e1'>
                    <div className='icono'>
                        <NumbersIcon/>
                    </div>
                    <div className='client'>
                        <p className='label'>Id llamada</p>
                        <p className="info">33-dd3-3d3-d3d3</p>
                    </div>
                </div>
                <div className="dataClient" id='e2'>
                    <div className='icono'>
                        <AccessTimeIcon/>
                    </div>
                    <div className='client'>
                        <p className='label'>Tiempo llamada</p>
                        <p className="info">00:01:00</p>
                    </div>
                </div> */}
            </div>

            <div className='filaEL'>
                <div className="dataClient" id='e3'>
                    <div className='icono'>
                        <EditNoteOutlinedIcon/>
                    </div>
                    <div className='client'>
                        <p className='label'>Client Issue</p>
                        <p className="info">{call.TipoLlamada}</p>
                    </div>
                </div>
                <div className="dataClient" id='e4'>
                    <div className='icono'>
                        <HelpOutlineIcon/>
                    </div>
                    <div className='client'>
                        <p className='label'>Notes</p>
                        <p className="info">{call.DescripcionLlamada}</p>
                    </div>
                </div>
            </div>

            <div className='filaEL'>
                <div className="dataClient" id='e5'>
                    <div className='icono'>
                        <SentimentNeutralOutlinedIcon/>
                    </div>
                    <div className='client'>
                        <p className='label'>Call Sentiment</p>

                        { call.SentimientoLlamada === "POSITIVE"  && <LinearProgress style={{height: 10, borderRadius: 2}} color="success" /> }

                        { call.SentimientoLlamada === "NEUTRAL" && <LinearProgress style={{height: 10, borderRadius: 2}}/>} 
                            
                        { call.SentimientoLlamada === "NEGATIVE" && <LinearProgress style={{height: 10, borderRadius: 2}} color="error" />}   
                            
                        <p className="info">{call.SentimientoLlamada}</p>
                    </div>
                </div>
            </div> 

        </section>

                }

        </>

    );

};