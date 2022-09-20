import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import withRouter from './WithRouter';
import useStyles from "../styles/PallateStyle"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';

export class Pallate extends Component {
  constructor(props){
    super(props);
    this.state={
      open : false,
      deletingId:""
    }
  }
  goToPalette = (id) => {
    this.props.router.navigate(`/palette/${id}`)
    console.log("clicked")
  }
  handleDialog = (id)=>{
    this.setState({
      open:!this.state.open,
      deletingId:id
    })
  }
  handleDelete = ()=>{
    this.props.deletePalette(this.state.deletingId);
    this.handleDialog()
  }
  render() {
    const { Pallate, classes, deletePalette } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>

          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to={"/palette/new"} style={{ color: "white", paddingTop: "6px" }}>Generate Palette</Link>
          </nav>
          <div className={classes.palletes}>
            {Pallate.map((obj, i) => {
              return <MiniPalette key={i} {...obj} handleClick={() => this.goToPalette(obj.id)} handleDialog={this.handleDialog} id={obj.id} />
            })}
          </div>
        </div>
        <Dialog open={this.state.open} onClose={()=>this.handleDialog()}>
          <DialogTitle>
            Delete This Palette?
            <List>
              <ListItem button onClick={()=>this.handleDelete()}>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:"lightblue",color:"blue"}}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>Delete</ListItemText>
              </ListItem>
              <ListItem button onClick={()=>this.handleDialog()}>
                <ListItemAvatar>
                <Avatar style={{backgroundColor:"lightcoral",color:"red"}}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>Cancle</ListItemText>
              </ListItem>
            </List>
          </DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default withRouter(withStyles(useStyles)(Pallate))
