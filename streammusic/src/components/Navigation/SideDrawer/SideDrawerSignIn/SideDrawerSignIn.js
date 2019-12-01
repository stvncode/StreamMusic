import React from 'react';
import {Link} from 'react-router-dom';

import Heading from '../../../UI/Headings/Headings';
import Buttons from '../../../UI/Forms/Buttons/Buttons';
import TextFieldOutlined from '../../../UI/Forms/TextFields/TextFieldOutlined';

import gif from './bart.gif';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import { GoChevronLeft } from 'react-icons/go';
import { FiMusic } from 'react-icons/fi';

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
      alignItems: 'center',
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
    button: {
      marginTop: '20px',
      marginLeft: '64.5px',
    },
    bart: {
      marginTop: '200px',
      marginLeft: '30px',
    },
    account: {
      marginTop: '5px',
      marginRight: '10px',
    }
  }));

const SideDrawerSignIn = ({open, setOpen}) => {

    const classes = useStyles();

    const handleDrawerClose = () => {
        setOpen(true);
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
                I'm happy to se you again <span role="img" aria-label="smiley">🙂</span>
            </Heading>
            <TextFieldOutlined value="name"/>
            <TextFieldOutlined value="password"/>
            <div className={classes.button}>
                <Buttons>
                    Sign In
                </Buttons>
            </div>
            <div className={classes.account}>
                <Heading size="h4" color="black">
                    <Link to={'/signup'}>
                        Create account
                    </Link>  
                </Heading>
            </div>
            <img className={classes.bart} src={gif} width="200px" alt="gif"/>
        </Drawer>
    )
};

export default SideDrawerSignIn;