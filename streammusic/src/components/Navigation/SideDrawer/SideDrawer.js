import React from 'react';
import Heading from '../../UI/Headings/Headings';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { GoChevronLeft } from 'react-icons/go';
import { FiMusic } from 'react-icons/fi';
import { MdLibraryMusic } from 'react-icons/md';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    margLeft: {
        marginLeft: '50px',
        marginTop: '20px',
        marginBottom: '10px',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: '20px',
      marginLeft: '61px',
    },
    bart: {
      marginTop: '200px',
      marginLeft: '20px',
    },
    account: {
      marginTop: '5px',
      marginRight: '5px',
    },
  }));

const SideDrawer = ({open, setOpen}) => {

    const classes = useStyles();

    const handleDrawerCloseUp = () => {
        setOpen(false);
      };

    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerCloseUp}>
              <GoChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <FiMusic className={classes.margLeft} size={128}/>
          <Heading size="h2" color="black">
            Music Project
          </Heading>
          <Divider />
          <ListItem button>
            <ListItemIcon>
            <FiMusic size={20}/>
            </ListItemIcon>
            <ListItemText primary="Salon" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MdLibraryMusic size={20}/>
            </ListItemIcon>
            <ListItemText primary="Playlist" />
          </ListItem>
        </Drawer>
    )
}

export default SideDrawer;