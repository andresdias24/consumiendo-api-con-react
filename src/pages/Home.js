import React from "react";
import Nav  from "../components/Nav";
import Button from "../components/Button";

const Home = (req, res) => {
    return(
        <>
            <Nav />
            <h2>pahina donde se mostraran las categorias</h2>
            <Button label="clic sobre mi" backgroundColor="red" />
        </>
    )
}

export default Home