import React, { useState } from "react";
import { API } from "../../config";
import styled from 'styled-components';


const ContenedorImages = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
`;


const ShowImage = ({item, url}) => (
  <ContenedorImages className="product-img">
    <img
      src={`${API}/${url}/photo/${item.videogame._id}`}
      alt={item.name}
      className="mb-3 img-cont"
      style={{maxHeight: "100%", maxWidth:"100%", borderRadius: "9px"}}/>
  </ContenedorImages>
)



export default ShowImage;