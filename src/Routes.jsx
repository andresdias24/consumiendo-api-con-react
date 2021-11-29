import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Packs from "./pages/Paquetes";
import 'bootstrap/dist/css/bootstrap.min.css';


const Routes = () =>  {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/paquetes"  component={Packs} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes