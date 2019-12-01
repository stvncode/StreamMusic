import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 120,
      height: 50,
      marginLeft: '56px',
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
        <TextField className={classes.top} id="outlined-basic" label="Name" variant="outlined">
          {children}
        </TextField>
      </form>
    );

  if (value === 'password')
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.top} id="outlined-basic" label="Password" variant="outlined">
          {children}
        </TextField>
      </form>
    );
}

export default TextFieldOutlined;

