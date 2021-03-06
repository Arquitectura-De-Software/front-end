import React, {Component} from 'react';
import {ToastContainer, ToastStore} from "react-toasts";
import {ciudades, refrigeracion} from "../constants/constants";
import {urlBackend} from "../constants/constants";

class CrearEnvios extends Component {
    constructor() {
        super();

        this.state = {
            origen: ciudades[0],
            destino: ciudades[0],
            refrigeracion: refrigeracion[0].value,
            estadoActual: {},
            envioGenerado: {}
        }
    }

    onButtonClick = (event) => {
        event.preventDefault();
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                origen: this.state.origen,
                destino: this.state.destino,
                refrigeracion: this.state.refrigeracion
            })
        };
        fetch(`${urlBackend}/envios/`, options)
            .then(result => {
                if (result.ok) {
                    return result.json()
                }else{
                    ToastStore.error("Error interno");
                }
            })
            .then(data => {
                {ToastStore.success(`Envio creado exitosamente con ID ${data.id}!`)}
                this.setState({envioGenerado: data})
            })
            .catch(error => {
                ToastStore.error("Error de conexion");
                console.log(error)
            })

    }

    setStateProp = (propertyName) => (event) => {
        var newState = {};
        const value = event.target.value;
        newState[propertyName] = value;
        this.setState(newState);
    }

    render() {
        return (
            <div class="card">
                <div class="card-header">
                    <h5>Crear Nuevo Envío</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col col-lg-4">
                                <label>Seleccione ciudad Origen </label> <br/>
                                <select onChange={this.setStateProp.bind(this)('origen')} >
                                    {ciudades.map((cuidad, index) => {
                                        return <option key={index} value={cuidad}>{cuidad}</option>
                                    })}
                                </select> 
                            </div>
                            <div class="col col-lg-4">
                                <label>Seleccione ciudad Destino </label> <br/>
                                <select onChange={this.setStateProp.bind(this)('destino')} >
                                    {ciudades.map((cuidad, index) => {
                                        return <option key={index} value={cuidad}>{cuidad}</option>
                                    })}
                                </select>
                            </div>
                            <div class="col col-lg-4">
                                <label>Seleccione tipo de refrigeracion </label> <br/>
                                <select onChange={this.setStateProp.bind(this)('refrigeracion')} >
                                    {refrigeracion.map((ref, index) => {
                                        return <option key={index} value={ref.value}>{ref.display}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col col-lg-12">
                                {/*HTML buttons has a bug, forces to reload the whole page, changing to div instead*/}
                                <button
                                    onClick={this.onButtonClick.bind(this)}
                                    className={"btn btn-success"}
                                >Crear envio
                                </button>
                                <ToastContainer store={ToastStore}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default CrearEnvios;