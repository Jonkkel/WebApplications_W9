import {Link} from 'react-router-dom'
import React, {Suspense} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@material-ui/core/styles";
// import MenuIcon from '@mui/icons-material/Menu';



function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
    }
    const useStyles = makeStyles({
        // This group of buttons will be aligned to the right
        rightToolbar: {
          marginLeft: "auto",
          marginRight: -12
        }
    })
    const classes = useStyles();
    return (
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            
                
                    <Button component={Link} to="/" variant="contained" color="primary">
                        {t("Home")}
                    </Button>
                    <Button component={Link} to="/about" variant="contained" color="primary">
                        {t("About")}
                    </Button>
                

                    <section className={classes.rightToolbar}>
                        <Button onClick={() => changeLanguage("fi")} variant="contained" color="primary"  id="fi" float="right">
                            fi
                        </Button>
                        <Button onClick={() => changeLanguage("en")} variant="contained" color="primary"  id="en">
                            en
                        </Button>
                    </section>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// export DenseAppBar();

// function Header(props) {
//     return (
//         <div>
//             <Link to="/">Home</Link> <Link to="/about"> about</Link>
//         </div>
//     );
//   }
  
// export default Header;

export default function App(){
    return(
        <Suspense fallback="loading">
            <Header/>
        </Suspense>
    )
}