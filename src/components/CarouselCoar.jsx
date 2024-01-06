import React from 'react';
import { Carousel } from 'antd';
import CoarFondo from "../assets/images/coar-fondo.png"
import CoarLogo from "../assets/images/coar-logo.png"

const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const CarouselCoar = () => (
  <Carousel autoplay>
    <div>
      <img style={{width:"100%", height:"360px"}} src={CoarFondo} alt="" />
    </div>
    <div>
    <img style={{width:"100%", height:"360px"}} src={CoarLogo} alt="" />
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default CarouselCoar;