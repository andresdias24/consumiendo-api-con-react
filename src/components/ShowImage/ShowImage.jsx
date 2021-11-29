import React, { useState } from "react";
import { API } from "../../config";
import styled from 'styled-components';


const ContenedorImages = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-top: -30px;
`;


const ShowImage = ({item, url}) => (
  <ContenedorImages className="product-img">
    <img
      src={`${API}/${url}/photo/${item.videogame._id}`}
      alt={item.name}
      className="mb-3 img-cont"
      style={{maxHeight: "150px", maxWidth:"150px", borderRadius: "50px"}}/>
  </ContenedorImages>
)



export default ShowImage;