import React from 'react'
import Layout from '../Component/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import EmailIcon from '@mui/icons-material/Email'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ bgcolor: '#d8d7d7' }}>
        <Box
          sx={{
            my: 10,
            ml: 10,
            '& h4': { fontWeight: 'bold', mb: 2 },
          }}
        >
          <Typography variant="h2">Contact My Restaurant</Typography>
          <p>
            Include an email and phone number so visitors can get in touch with
            you on their first attempt. Include a short form using fields
            that'll help your business understand who's contacting them. Have a
            call-to-action to provide visitors with another action to take if
            they choose not to complete the form.
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: '600px',
            ml: 10,
            '@media (max-width:600px)': {
              width: '300px',
            },
          }}
        >
          <TableContainer sx={{bgcolor:'#959595'}} component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: 'black', color: 'white' }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} />{' '}
                    1800-00-0000 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: 'skyblue', pt: 1 }} />{' '}
                    aakashkesharwani95@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AddIcCallIcon sx={{ color: 'green', pt: 1 }} /> 8318481867
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  )
}

export default Contact
