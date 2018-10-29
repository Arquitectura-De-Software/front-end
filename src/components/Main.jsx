import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import CrearEnvios from "./CrearEnvios";
import Envios from "./Envios";
import ModificarEnvios from "./ModificarEnvios";


class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main>
                <Switch>
                    {/*<Route exact path='/' component={Home}/>*/}
                    {/* both /roster and /roster/:number begin with /roster */}
                    <Route exact path='/crearenvio' component={CrearEnvios}/>
                    <Route exact path='/envios' component={Envios}/>
                    <Route exact path='/modificarenvio' component={ModificarEnvios}/>
                    {/*<Route exact ='/schedule' component={Schedule}/>*/}
                </Switch>
            </main>
        );
    }
}

export default Main;