import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import useStyles from "../styles/MiniPaletteStyle.js"
import DeleteIcon from '@mui/icons-material/Delete';


export class MiniPalette extends Component {
  // constructor(props){
  //   super(props);

  // }
  deletePalette = (e) => {
    e.stopPropagation();
    // alert("hii")
    this.props.handleDialog(this.props.id)
  }
  render() {
    const { classes, id, emoji, paletteName, colors } = this.props

    const miniColorBoxs = colors.map((color, i) => {
      return <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={i} />
    })
    return (
      <div className={classes.root} onClick={this.props.handleClick}>
        <DeleteIcon className={classes.deleteIcon} style={{ transition: "all 0.3s ease-in-out" }} onClick={(e) => this.deletePalette(e)} />
        <div className={classes.colors}>
          {miniColorBoxs}
        </div>
        <h6 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h6>
      </div>

    )
  }
}

export default withStyles(useStyles)(MiniPalette)
