// import { AppBar, Button, Toolbar, Typography } from '@mui/material';
// import React from 'react';

// function Header() {
//   return (
//     <AppBar position="relative">
//       <div className="container">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
//             News
//           </Typography>
//           <Button color="inherit">Change Theme</Button>
//         </Toolbar>
//       </div>
//     </AppBar>
//   );
// }

// export default Header;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CiDark, CiSun } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';

import { changeTheme } from '../store/OpenSingleSlice';

export default function ButtonAppBar() {
  const theme = useSelector((state) => state.country.theme);
  const dispatch = useDispatch();
  const changeThemeHandler = () => {
    dispatch(changeTheme());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <div className="container">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              News
            </Typography>
            <Button
              size="large"
              className="theme"
              color="inherit"
              onClick={() => changeThemeHandler()}
            >
              {theme === true ? <CiSun /> : <CiDark />}
            </Button>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}
