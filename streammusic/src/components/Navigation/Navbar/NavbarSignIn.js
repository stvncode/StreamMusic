import React, {useState} from 'react';

import Search from './Search/Search';
import SideDrawerSignIn from '../SideDrawer/SideDrawerSignIn/SideDrawerSignIn';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { FiMenu } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'black',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  leftSearch: {
    marginLeft: '44.5px',
  },
  leftChevron: {
    marginLeft: '15px',
    marginTop: '6.5px',
  },
}));

const NavbarSignIn = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
          <FiMenu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Music Project 
          </Typography>
          <div className={classes.leftChevron}>
            <FaChevronRight />
          </div>
          {/*Insert {salon or playlist}*/}
          <div className={classes.leftSearch}>
            <Search />
          </div>
        </Toolbar>
      </AppBar>
      <SideDrawerSignIn open={open} setOpen={setOpen}/>
    </div>
  );
}

export default NavbarSignIn;