import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  }
}));

const RestrictionCard = props => {
const {tag} = props
  const classes = useStyles();
return (
  <Card>
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography variant="h3">{tag}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ClearIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
)
 

}
  
export default RestrictionCard