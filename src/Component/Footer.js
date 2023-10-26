import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'

import React from 'react'

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: 'center', bgcolor: 'grey', color: 'goldenrod', p: 3 }}
      >
        <Box
          sx={{
            my: 1,
            '& svg': { fontSize: '60px', cursor: 'pointer', mr: 2 },
            '& svg:hover': {
              color: 'red',
              transform: 'translateX(5px)',
              transition: 'all ease',
            },
          }}
        >
          {/* icons */}
          <GitHubIcon />
          <InstagramIcon />
          {/* <WhatsAppIcon /> */}
          <TwitterIcon />
          <FacebookIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            '@media (max-width:600px)': {
              fontSize: '1rem',
              // bgcolor: 'red',
              color: 'white',
            },
          }}
        >
          AllRight Reserved &copy; website created By{' '}
          <i>
            <h4>Aakash Kesharwani</h4>
          </i>
        </Typography>
        <Typography>Terms & Conditions / Privacy Policy</Typography>
      </Box>
    </>
  )
}

export default Footer
