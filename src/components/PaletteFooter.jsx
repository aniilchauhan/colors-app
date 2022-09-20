import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import useStyles from "../styles/PaletteFooter"

export class PaletteFooter extends Component {
  render() {
    const {paletteName,emoji,classes} = this.props
    return (
        <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
  }
}

export default (withStyles(useStyles)(PaletteFooter))

