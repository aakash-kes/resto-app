import React from 'react'
import Layout from '../Component/Layout/Layout'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { menuList } from '../Data/Data'

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          // background-color: darkslategray;
          bgcolor: 'darkslategray',
        }}
      >
        {menuList.map((menu) => (
          <Card sx={{ maxWidth: '390px', display: 'flex', m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.Image}
                alt={menu.Name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {menu.Name}
                </Typography>
                <Typography variant="body2">{menu.Description}</Typography>
                <br/>
                <Typography gutterBottom variant="h5" component="div">
                {menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export default Menu