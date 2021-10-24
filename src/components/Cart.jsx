import React, { useState } from "react";
import styled from 'styled-components';
// import {ShowImage} from "../ShowImage/ShowImage";

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #fff;
  whith: 50%;
  background: red;
`;

const Contenedor = styled.div`
    min-width: 240px;
    margin: 80px 0 40px 0;
    padding: 20px 5px;
    text-align: center;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08);
`


// .btn {
//     border-radius: 44px;
//     text-align: center;
//     margin: 0 auto;
//   }
  
//   .card-cont {
    
//   }
  
//   .img {
//     max-width: 200px;
//   }



const Card = (paquete) => {
    // const [count, setcount] = useState(paquete.count)
    return(
        <>
            <Contenedor className="card m-10">
                {/* <ShowImage  item={paquete} /> */}
                {/* <Title>{paquete.name}</Title> */}
                {/* <Title>{paquete.name}</Title> */}
                {/* <Title>${paquete.price}</Title> */}
                <Title>holas con customstyle</Title>
            </Contenedor>
        </>
    )
};  

export default Card;