import React from 'react'
import Footer from './Footer';
import img from './Images/image.jpg'


const Home=()=>{
  const backgroundImagesStyle={
   backgroundImage:`url(${img})`,
   backgroundSize:'cover',
  //  backgroundRepeat:'no-repeat',
   height:'100vh',
   fontSize:'50px'
  };

  return (
  <div style={backgroundImagesStyle}>
    <div style={{paddingTop:"150px"}}>
      <p style={{"paddingTop":"80px", textAlign:"left", paddingLeft:"50px", fontSize:"30px", fontFamily:"serif",
        color:"black" ,fontWeight:"18px"}}>
        "Food is not just fuel its an experience
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        Better Taste in Royal Style        
      </p>
    </div>
  
  </div>

    
    
  )
  }

export default Home