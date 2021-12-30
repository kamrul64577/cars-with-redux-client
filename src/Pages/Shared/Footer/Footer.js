import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Footer = () => {

    return (
        <Box sx={{ flexGrow: 1, py: 1 }} style={{ backgroundColor: '#46373B', margin:'0' }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={6} >

                        <Typography variant="p" component="div" style={{ color: 'white', textAlign: 'center', margin: '0px' }}>
                            © 2021 Cars House Made with <FavoriteIcon style={{ color: 'red', fontSize: '20px' }}></FavoriteIcon> by Kamrul
                        </Typography>


                    </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{ margin: '0'}}>

                        <Typography variant="p" component="div" style={{ color: 'white', textAlign: 'center', margin:'0'}}>
                            <i class="fab fa-facebook-f" style={{ marginLeft: '' }}></i>
                            <i class="fab fa-youtube" style={{ marginLeft: '20px' }}></i>
                            <i class="fab fa-instagram" style={{ marginLeft: '20px' }}></i>
                            <i class="fab fa-linkedin" style={{ marginLeft: '20px' }}></i>
                        </Typography>


                    </Grid>


                </Grid>
            </Container>
        </Box >

    );
};

export default Footer;