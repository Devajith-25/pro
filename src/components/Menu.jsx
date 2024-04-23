import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {MenuData} from './Menu.Data'

const Menu = () => {
  const [items,setItems] = useState(MenuData)



  const decQty = (id)=>{
    const newItem = items.map((item)=>
    item.id === id && item.qty > 1 ?{...item,qty:item.qty-1}:item
    );
    setItems(newItem);
    
    }
  
  const incQty = (id)=>{
    const newItem = items.map((item)=>
    item.id === id?{...item,qty:item.qty+1}:item
    );
    setItems(newItem);
    
    }
  
  return (

    <div style={{"paddingTop":"150px"}}>
      
        {items.map((item)=>(
            <div className='' key={item.id}>
            
           <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
           <Card sx={{maxWidth:"390",m:3}} > 
             <CardMedia 
             sx={{minHeight: "200px"}}
             component={"img"}
             height='200px'
             image={Menu.image}
             />
             <CardContent>
               <Typography gutterBottom variant='h5' component='div'>
                 {item.item}
               </Typography>
               <p>Price: {item.price}</p>
               <div>
                 <p>
                   <Typography variant='h6'>Qty:{item.qty}</Typography>
                   <Button onClick={()=> decQty(item.id)} variant='contained' color='success'>-</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                   <Button onClick={()=> incQty(item.id)} variant='contained' color='success'>+</Button>
                 </p>
               </div>
             </CardContent>
             <CardActions>
               <Button size='small'>add to cart</Button>
               <Button size='small'>buy</Button>
             </CardActions>
           </Card>
           </Box>
           </div>
        ))}
           </div>   
    
  )
        }
        


export default Menu