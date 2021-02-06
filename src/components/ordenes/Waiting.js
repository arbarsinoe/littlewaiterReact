import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { getOrders } from '../../firebase/orders';

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: theme.spacing(4),
  },
  botton: {
    marginTop: theme.spacing(5),
  },
}));

export default function FormRow(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllorders();
  }, []);

  const getAllorders = () => {
    const data = getOrders();
    setOrders(data);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={4}>
        <Grid item xs className={classes.box}>
          <Box bgcolor="primary.main" textAlign="center" color="primary.contrastText" p={2}>
            En espera
          </Box>
        </Grid>
        <Paper className={classes.paper} elevation={8}>
          <Grid container spacing={2}>
            <Grid item xs>
              {orders.map((item, i) => (
                <Typography key={i}>
                  {item.content[0].name}
                  {item.content[0].part}
                  {item.content[0].price}
                  {item.content[0].quantity}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.botton}>
            <Button variant="contained" color="primary">
              Aceptar
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
