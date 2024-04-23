import { ExpandMore } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import img from './Images/dev.jpeg'
const Dashboard = () => {
    const backgroundImagesStyle={
        backgroundImage:`url(${img})`,
        backgroundSize:'cover',
       //  backgroundRepeat:'no-repeat',
        height:'800h',
        fontSize:'px'
    };
  return (
    <div style={backgroundImagesStyle}>

    <div>
        

        {/* .................................................... */}

        <Card style={{paddingTop:'100px',maxWidth:'400px',backgroundColor:'violet',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

         {/* .................................................... */}

         <Card style={{maxWidth:'400px',backgroundColor:'tomato',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Cheese Burger"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://plus.unsplash.com/premium_photo-1667682209935-b6c87cced668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        he better the beef, the better the flavour,
        but I would never turn my nose up at a burger made with everyday supermarket beef.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

              {/* .................................................... */}

              <Card style={{maxWidth:'400px',backgroundColor:'skyblue',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Red Sauce Pasta"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Feeling saucy with this pasta dish!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

        {/* .................................................... */}

        <Card style={{maxWidth:'400px',backgroundColor:'saddlebrown',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Puttu"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Main dish.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

         {/* .................................................... */}

         <Card style={{maxWidth:'400px',backgroundColor:'silver',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Poori"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fluffy_Poori.JPG/250px-Fluffy_Poori.JPG"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Imported from Mumbai.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

          {/* .................................................... */}

          <Card style={{maxWidth:'400px',backgroundColor:'orange',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Biriyani"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Flower like rice.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

         {/* .................................................... */}

         <Card style={{maxWidth:'400px',backgroundColor:'yellowgreen',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Porotta"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ANtF58sKUJhJC_fL0F8wn_vLeAo-hYUoKFkvPCsMlQ&s"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

         {/* .................................................... */}

         <Card style={{maxWidth:'400px',backgroundColor:'yellow',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chapati"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg/250px-2_Chapati_warm_and_ready_to_be_eaten.jpg"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        taste of weat
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

         {/* .................................................... */}

         <Card style={{maxWidth:'400px',backgroundColor:'yellowgreen',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Porotta"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ANtF58sKUJhJC_fL0F8wn_vLeAo-hYUoKFkvPCsMlQ&s"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        its kerala food
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

         {/* .................................................... */}

         <Card style={{maxWidth:'400px',backgroundColor:'chocolate',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Puttu IceCream"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="pasta"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        like a magic
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

         {/* .................................................... */}

         <Card style={{maxWidth:'400px',backgroundColor:'deeppink',marginLeft:'500px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJWx9cJ_yMZbLc56tfpmd0Ii9Vd8hgFpKQ&s" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shavarma"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        arabic experience
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card><br/>

        {/* .................................................... */}

        </div>
    </div>
  )
}

export default Dashboard