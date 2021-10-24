import React from "react";
import Nav  from "../components/Nav";
import Button from "../components/Button";
import Cart from "../components/Cart";

const Home = (req, res) => {
    return(
        <>
            <Nav />
            <h2>pahina donde se mostraran las categorias</h2>
            <Button label="clic sobre mi" backgroundColor="red" />
            <Cart />
        </>
    )
}

export default Home