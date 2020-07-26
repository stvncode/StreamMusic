import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      height: 50,
      marginLeft: '20px',
      marginTop: '15px',
    },
  },
  top: {
    marginTop: '20px',
  },
}));

const TextFieldOutlined = ({value, children}) => {
  const classes = useStyles();
  
  if (value === 'name')
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField inputProps={{ style: {textAlign: 'center'} }} className={classes.top} id="standard-basic" label="Name" variant="standard">
          {children}
        </TextField>
      </form>
    );

  if (value === 'password')
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField inputProps={{ style: {textAlign: 'center'} }} className={classes.top} id="standard-basic" label="Password" variant="standard">
          {children}
        </TextField>
      </form>
    );
}

export default TextFieldOutlined;

