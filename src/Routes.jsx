import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';


const Routes = () =>  {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/paquetes"  component={Search} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes