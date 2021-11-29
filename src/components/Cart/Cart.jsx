import React, { useState } from "react";
import styled from 'styled-components';
import ShowImage from "../ShowImage/ShowImage";
import Button  from "../Button/Button";



const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #fff;
  width: 50%;
  background: blue;
  `;
const TitlePrice = styled.h1`
  font-size: 10px;
  text-align: center;
  color: #000;
  width: 50%;
  `;

  
const RedSocial = styled.div`
    display: flex;
    justify-content: space-between;
`
const Description = styled.p`
    color:red;
    border: solid 1px #000; 
`
const Email = styled.p`
    color:red;
    border: solid 1px #000;
`

const Contenedor = styled.div`
    border-radius: 15px;
    width: 80%;
    height: 50vh;
    margin-top: 40px;
    padding: 10px 5px;
    Text-align: center;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08);
`;

const ContainerText =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Header =  styled.div`
    overflow:hidden;
    height: 47vh;
`;




const Card = (paquete) => {
    console.log("paquete", paquete)
    const [count, setcount] = useState(paquete.count)
    return(
        <>
            <Contenedor className="card m-10">
                <Header>
                    <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg" alt="fond" />
                </Header>
                <ShowImage  item={paquete} url="paquete"/>
                <ContainerText>
                    <Title>{paquete.videogame.name}</Title>
                    <TitlePrice>{paquete.videogame.price}</TitlePrice>
                </ContainerText>
                <RedSocial>
                    <Description>Description</Description>
                    <Email>correo@gmail.com</Email>
                </RedSocial>
                <Button label={"comprar"} backgroundColor={"green"}/>
            </Contenedor>
        </>
    )
};  

export default Card;