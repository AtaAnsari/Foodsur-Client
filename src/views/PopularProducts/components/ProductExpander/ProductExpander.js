// import React from 'react'
// import {Typography, Button} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Box} from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   }
// }));

// const ProductExpander = (props) => {

// const classes = useStyles();

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const ProductExpander = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
 <div className={classes.root}>
     <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      {props.rank}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={props.productName}
                    secondary={secondary ? 'Secondary text' : null}
                    style={{marginRight: "30px"}}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <StarBorderIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>
        </div>

    // <div className={classes.root}>


    //   <ExpansionPanel>
    //     <ExpansionPanelSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     >
    //       <Typography className={classes.heading}>{props.productName}</Typography>
    //     </ExpansionPanelSummary>
    //     <ExpansionPanelDetails justifyContent="flex-end">
    //       <Box display="flex">
    //       <Button size= "small" variant="contained" color="primary">
    //         Add to Favourites
    //       </Button>
    //       <Button style={{marginLeft: "50px"}} size= "small" variant="contained" color="primary" >
    //         Detailed Preferences
    //       </Button>
    //       </Box>
    //     </ExpansionPanelDetails>
    //   </ExpansionPanel>
    // </div>
  )
}

export default ProductExpander
