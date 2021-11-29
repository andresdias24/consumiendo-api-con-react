import React, {useState, useEffect} from 'react';
import Card from "../components/Cart/Cart";
import {getVideogames} from '../apiCore';
import Nav  from "../components/Nav/Nav";
// import Button from "../components/Button/Button";

const Packs = () => {
    const [videogames, setVideogames] = useState([]);
    const [error, setError] = useState(false);
    console.log("videogames",videogames)

    const loadVideoGames = () => {
        getVideogames().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setVideogames(data);
                console.log(data, "data paginas");
            }
        })
    }

    useEffect(() => {
        loadVideoGames();
    }, [])

    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    {videogames.map((videogame, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
                            <Card videogame={videogame} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Packs;