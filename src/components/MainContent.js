import React from "react";
import { Typography, Grid, Container, Button, Box } from "@mui/material";
const MainContent = ()=>{
    return (
        <>
       
            <Box sx={{paddingTop:"120px", paddingBottom:"50px"}}>
                <Typography variant="h4" sx={{display:"flex", justifyContent:"center"}}>Upload and Share Your Images</Typography>
                <Typography variant="p" sx={{display:"flex", justifyContent:"center"}}>Drag and drop anywhere you want and start uploading your images now. 32 MB limit. Direct image links, BBCode and HTML thumbnails.</Typography>
                <Grid container justify="center" paddingLeft="42%" paddingTop="50px">
                    <Container sx={{justifyContent:"center"}}>

                        <Button variant="contained">Start Uploading</Button>
                    </Container>
                </Grid>
            </Box>

            
        </>
    );
}

export default MainContent;