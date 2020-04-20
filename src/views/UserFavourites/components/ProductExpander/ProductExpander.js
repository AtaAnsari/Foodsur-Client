import React from 'react'
import { Typography, Button, IconButton, Link, Table, TableBody, TableHead, TableCell, TableRow, Paper, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCookies } from 'react-cookie';
import axios from 'axios'



const useStyles = makeStyles((theme) => ({

  product: {
    display: "flex",
    justifyContent: "space-between"
  },
  heading: {
    paddingTop: "17px",
    paddingBottom: "13px"
  },
  icon: {
    paddingTop: "5px"
  },
  subHeading: {
    paddingTop: "17px",
    fontStyle: "italic",
    paddingBottom: "13px",
    fontSize: "18px",
    color: "grey"
  },
  productDetailsName: {
    marginBottom: '10px'
  }

}));

const ProductExpander = (props) => {
  const history = useHistory();
  const classes = useStyles()
  const [cookies] = useCookies(['session']);

  const removeFavourite = () => {
    const userId = {
      userId: cookies.session,
      apiId: props.apiId
    }

    console.log('called')

    axios.delete('/api/user-data/remove-favourites', {
      params: userId
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.product}>
        <div>
          <Typography variant="h4" className={classes.heading}>{props.favourite.length < 18 ? props.favourite : props.favourite.slice(0, 20).concat('...')}</Typography>
        </div>
        <div className={classes.icon}>
          <Link variant="h6" style={{ color: "black" }} href="#" >
            + Grocery List
          </Link>
          <IconButton onClick={removeFavourite}>
            <DeleteIcon />
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
            <Typography className={classes.subHeading}>Product Details</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails justifyContent="flex-end">
          <Box display="flex" flexDirection='column' style={{ alignItems: 'center' }}>
            <div>
              <Typography variant='h6' className={classes.productDetailsName}>{props.favourite}</Typography>
            </div>
            <div>
              {
                props.macros.calories < 1 ? <Typography className={classes.subHeading}>Macro Nutrient Data is Unavailable</Typography> :
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableBody>
                        <TableRow>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">{props.macros.calories}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">{props.macros.fat}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">{props.macros.carbs}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                          <TableCell align="right">{props.macros.protein}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
              }
            </div>

          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div >
  )


}

export default ProductExpander
