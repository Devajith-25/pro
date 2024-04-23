import { Button, TextField } from '@mui/material'
import React from 'react'
import img from'./Images/i77.jpeg'



const Feedback = () => {
  const backgroundImagesStyle={
    backgroundImage:`url(${img})`,
    backgroundSize:'cover',
   //  backgroundRepeat:'no-repeat',
    height:'100vh',
    fontSize:'10x'
   };
  return (
    <div style={backgroundImagesStyle}>

  

      <div style={{"paddingTop":"200px", width:"400px",backgroundColor:''}}>
        <TextField placeholder='Enter your mail'/><br/><br/>
        <TextField 
        placeholder='Enter your valuable feedbacks'
        
        /><br/><br/>
        <Button variant="contained" color='success'>submit</Button>

      </div>

    </div>
  )
}

export default Feedback