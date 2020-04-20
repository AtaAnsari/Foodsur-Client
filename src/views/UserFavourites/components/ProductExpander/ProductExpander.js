import React from 'react'
import {Typography, Button, IconButton, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({

  product:{
    display:"flex",
    justifyContent:"space-between"
  },
  heading:{
    paddingTop:"17px",
    paddingBottom: "13px"
  },
  icon:{
    paddingTop:"5px"
  },
  subHeading:{
    paddingTop:"17px",
    fontStyle:"italic",
    paddingBottom: "13px",
    fontSize: "18px",
    color: "grey"
  }

}));

const ProductExpander = (props) => {
  const history = useHistory();
  const classes = useStyles()
  
return(
<div className={classes.root}>
<div className={classes.product}>
<div>
<Typography variant="h4" className={classes.heading}>{props.favourite}</Typography>
</div>
<div className={classes.icon}>
<Link variant="h6" style={{color: "black"}} href="#" >
    + Grocery List
  </Link>
<IconButton >
    <DeleteIcon/>
  </IconButton>
</div>
</div>  

<ExpansionPanel>
  <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  > 
  <div>
    <Typography className={classes.subHeading}>Macro-Nutrient Details</Typography>
  </div>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails justifyContent="flex-end">
    <Box display="flex">
      <p>Austin biodiesel flexitarian before they sold out. Gluten-free truffaut cred jean shorts, cray lyft typewriter bicycle rights hell of VHS cronut. 8-bit migas food truck tbh, meditation raw denim roof party humblebrag. Health goth iceland hell of ugh deep v meditation XOXO. Quinoa PBR&B hell of stumptown air plant.</p>
    </Box>
  </ExpansionPanelDetails>
</ExpansionPanel>
</div>
)
    
  
}

export default ProductExpander
