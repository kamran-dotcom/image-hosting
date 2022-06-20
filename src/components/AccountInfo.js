import React from "react";
import { Typography, AppBar, Toolbar, Button, Box, styled, Card, CardHeader, CardContent } from "@mui/material";

const PerimumPlan = styled("div")({
    display:"flex",
    justifyContent:"center",
    paddingTop:"20px",

});
const AccountInfo = () =>{
    return(
        <>
        <Box>
            <Typography variant="h4" sx={{display:"flex", justifyContent:"center"}}>ImgBB Pro account</Typography>
            <Typography variant="p" sx={{display:"flex", justifyContent:"center"}}>ImgBB is a free image hosting service. Upgrade to unlock all the features.</Typography>
        </Box>
        <PerimumPlan>
            <Card>
                <CardHeader>Header</CardHeader>
                <CardContent>content</CardContent>
            </Card>
            <Card>
                <CardHeader>Header</CardHeader>
                <CardContent>content</CardContent>
            </Card>
            <Card>
                <CardHeader>Header</CardHeader>
                <CardContent>content</CardContent>
            </Card>
        </PerimumPlan>
        </>
    );
}

export default AccountInfo;