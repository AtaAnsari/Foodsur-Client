import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  card: {
    padding: "10px",
    margin: "15px"
  },
  contentPosition: {
    paddingTop: "15px"
  }
}));

const PassCard = props => {
const {tag} = props
  const classes = useStyles();
return (
  <Card className={classes.card}>
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography className={classes.contentPosition} variant="h3">{tag}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <DoneIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
)
 

}
  
export default PassCard
