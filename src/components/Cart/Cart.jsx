import React from "react";
import styled from "styled-components";
import ShowImage from "../ShowImage/ShowImage";
import Button from "../Button/Button";

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #fff;
  width: 100%;
  background: #000;
  border-radius: 6px;
`;
const TitlePrice = styled.h1`
  font-size: 10px;
  text-align: center;
  color: #000;
  width: 50%;
border-radius: 9px;
`;

const RedSocial = styled.div`
  display: flex;
  flex-direction: column;
`;
const Description = styled.p`
  color: black;
  border: solid 1px #000;
  border-radius: 6px;
`;
const Email = styled.p`
  color: black;
  border: solid 1px #000;
  border-radius: 6px;
`;

const Contenedor = styled.div`
  border-radius: 9px;
  width: 100%;
  margin-top: 40px;
  padding: 10px 5px;
  text-align: center;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  overflow: hidden;
  // height: 47vh;
`;

const ButtonEdit = styled.div`
  margin: 1px;
  padding: 1px;
  border-radius: 9px;
`;
const ButtonDelete = styled.div`
  margin: 1px;
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = (paquete) => {
  console.log("paquete", paquete);
  // const [count, setcount] = useState(paquete.count)
  return (
    <>
    <Contenedor>
        <Header>
          {/* <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg" alt="fond" /> */}
        </Header>

        <ShowImage item={paquete} url="addTasks" />

        <ContainerText>
            <Title>{paquete.videogame.name}</Title>
            <TitlePrice>{paquete.videogame.price}</TitlePrice>
        </ContainerText>

        <RedSocial>
            <Description>{paquete.videogame.description}</Description>
            <Email>{paquete.videogame.updatedAt}</Email>
        </RedSocial>

        <Actions>
            <ButtonEdit>
                <Button
                    label={"editar"}
                    backgroundColor={"green"}
                    borderRadius={"6px"}
                />
            </ButtonEdit>
            <ButtonDelete>
                <Button
                label={"eliminar"}
                backgroundColor={"red"}
                borderRadius={"6px"}
                />
            </ButtonDelete>
        </Actions>
    </Contenedor>
    </>
  );
};

export default Card;
