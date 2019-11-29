import React from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { FiMusic } from 'react-icons/fi';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextFieldOutlined from '../../UI/Forms/TextFields/TextFieldOutlined';
import Heading from '../../UI/Headings/Headings';

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
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    top: {
      marginTop: '40px',
    },
  }));

const SideDrawer = ({open, setOpen}) => {

    const classes = useStyles();

    const handleDrawerClose = () => {
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
          <IconButton onClick={handleDrawerClose}>
            <GoChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <FiMusic className={classes.margLeft} size={128}/>
        <Heading size="h2" color="black">
          Music Project
        </Heading>
        <Heading size="h4" color="black">
          I'm happy to se you again
        </Heading>
        <TextFieldOutlined value="name"/>
        <TextFieldOutlined value="password"/>
      </Drawer>
    )
}

export default SideDrawer;