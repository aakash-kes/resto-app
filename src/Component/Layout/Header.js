import React, { useState } from 'react'

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import MenuIcon from '@mui/icons-material/Menu'

import { NavLink } from 'react-router-dom'
import '../../Styles/HeaderStyle.css'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  //handle menu click

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <RestaurantIcon />
        The Garden of Eat’n
      </Typography>
      <Divider />

      <ul className="mobileNavigation-menu">
        <li>
          <NavLink activeClassName="active" to={'/home'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/menu'}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>contact</NavLink>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <RestaurantIcon /> Foody Resturent
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={'/home'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        {/* mobile view  */}

        <Box component={'nav'}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                width: '240px',
                boxSizing: 'border-box',
              },
            }}
          >
            {/* calling drawer ......................................*/}
            {drawer}
          </Drawer>
        </Box>

        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header
