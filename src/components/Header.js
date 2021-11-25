import {Link} from 'react-router-dom'
import React, {Suspense} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { useTranslation } from 'react-i18next';
// import MenuIcon from '@mui/icons-material/Menu';



function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <Button component={Link} to="/" variant="contained" color="primary">
                {t("Home")}
            </Button>
            <Button component={Link} to="/about" variant="contained" color="primary">
                {t("About")}
            </Button>
            <Button onClick={() => changeLanguage("fi")} variant="contained" color="primary">
                fi
            </Button>
            <Button onClick={() => changeLanguage("en")} variant="contained" color="primary">
                en
            </Button>

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