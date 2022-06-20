import React from "react";
import { Typography, AppBar, Toolbar, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Route , Routes , Link} from 'react-router-dom';

const StyleToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between",
    background:"white",
    color:"black",
    borderBottom:"5px",
    borderBottomColor:"black"
})

const Icons = styled("div")({
    display:"flex",
    // justifyContent:"space-between"
    paddingRight:"5px",
    marginRight:"10px"

})

const IconsInside = styled("div")({
    display:"flex",
    padding:"10px",
    justifyContent:"center"
});

const LineBreak = styled("hr")({
    color:"black",
    height:"5px"
})

const Header = () =>{
    return(
        <>
        {/* <AppBar position="sticky" sx={{backgroundColor:"white",color:"black"}}> */}
            <StyleToolbar>
                <Icons>
                <HelpOutlineIcon></HelpOutlineIcon>
                <Typography sx={{ ml:1 }}>About</Typography>
                                    
                </Icons>
                <Typography variant="h6">ImgBB</Typography>
                <Icons>
                    <IconsInside>
                        <CloudUploadIcon sx={{mr:1}}></CloudUploadIcon>
                        <Typography>Upload</Typography>
                    </IconsInside>
                    <IconsInside>
                        <ExitToAppOutlinedIcon sx={{mr:1}}></ExitToAppOutlinedIcon>
                        <Typography>Sign in</Typography>
                    </IconsInside>
                    <IconsInside>
                        {/* <Link to="/sign-up"><Button variant="contained">create account</Button></Link> */}
                        <Button variant="contained">create account</Button>
                    </IconsInside>
                    
                </Icons>
            </StyleToolbar>
            {/* <LineBreak></LineBreak> */}
        {/* </AppBar> */}
        </>
    );
}

export default Header;