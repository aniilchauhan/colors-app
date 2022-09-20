import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@mui/material/Select';
import {MenuItem} from '@material-ui/core';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import useStyles from "../styles/NavbarStyle"

export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      format:"hex",
      open:false
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect = (e)=>{
    console.log(e.target.value)
    this.setState({
      format:e.target.value,
      open:true
    })
    this.props.handleSelect(e.target.value)
  }
  closeSnackbar = ()=>{
    this.setState(
      {
        open:false
      }
    )
  }
  render() {
    const {classes,level,handleChange,handleSelect,showingAllColors} = this.props;
    const {format,open} = this.state;
    return (
      <header className={classes.navbar}>
        <div className={classes.logo}>
            <Link to={"/"}>React Color Picker</Link>
        </div>
       { showingAllColors && <div className={classes.sliderContainer}>
        <span>level:{level}</span>
       <div className={classes.slider}>
        <Slider defaultValue={level} min={100} step={100} max={900} onAfterChange={(e) => handleChange(e)} />
        </div>
        </div>}
      <div className={classes.selectContainer}>
      <Select size="small" variant='standard' value={format} onChange={this.handleSelect}>
        <MenuItem value="hex">HEX-#ffffff</MenuItem>
        <MenuItem value="rgb">RGB-rgb(255,255,255)</MenuItem>
        <MenuItem value="rgba">RGBA-rgba(255,255,255,1.0)</MenuItem>
      </Select>
      </div>
      <Snackbar anchorOrigin={{vertical:"bottom",horizontal:"left"}} 
      open={open} 
      autoHideDuration={3000}
      message={<span id='msgId'>format changed!</span>}
      ContentProps={{
        "aria-describedby":"msgId"
      }
      }
      onClose={()=>this.closeSnackbar()}
      action={[
        <IconButton onClick={()=>this.closeSnackbar()} color={"inherit"} key={"close"}>
          <CloseIcon/>
        </IconButton>
      ]}
      />
      </header>
    )
  }
}

export default withStyles(useStyles)(Navbar)
