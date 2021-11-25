import {Link} from 'react-router-dom'
import React, {Suspense} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Grid from '@mui/material/Grid'
// import MenuIcon from '@mui/icons-material/Menu';



function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
    }
  return (
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Grid justify="space-between" container spacing={100}>
                <Grid item>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        {t("Home")}
                    </Button>
                    <Button component={Link} to="/about" variant="contained" color="primary">
                        {t("About")}
                    </Button>
                </Grid>

                <Grid item>
                    <Button onClick={() => changeLanguage("fi")} variant="contained" color="primary"  id="fi">
                        fi
                    </Button>
                    <Button onClick={() => changeLanguage("en")} variant="contained" color="primary"  id="en">
                        en
                    </Button>
                </Grid>
            </Grid>
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