import React, { Component } from 'react'
import { generatePalette } from '../colorsHelper';
import withRouter from './WithRouter';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import useStyles from "../styles/SingleColorPalletteStyle"

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      currentColor: ""
    }
    this.changeFormat = this.changeFormat.bind(this);
  }
  componentDidMount = () => {
    this.props?.Pallate?.map((color) => {
      if (color.id === this.props.router.params.paletteId) {
        this.setState({
          currentColor: generatePalette(color)
        })
      }
    })
  }
  gatherShades = () => {
    let shades = [];
    let allColors = this.state.currentColor.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === this.props.router.params.colorId)
      )
    }
    console.log(this.props.router.params.colorId)

    return shades.slice(1);
  }
  changeFormat = (val) => {
    this.setState({
      format: val
    })
  }
  render() {

    const colorBox = this.gatherShades()
    const { classes } = this.props
    const {format,currentColor} = this.state
    return (
      <div className={classes.palette}>
        <Navbar handleSelect={this.changeFormat} showingAllColors={false}/>
        <div className={classes.paletteColors}>
          {colorBox.map((color, i) => {
            return <ColorBox key={i} name={color.name} background={color[format]} showingFullPalette={false} />
          })}
          <div className={classes.goBack}>
          <Link to={`/palette/${currentColor.id}`} className={classes.backButton}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter emoji={currentColor.emoji} paletteName = {currentColor.paletteName}/>
      </div>
    )
  }
}

export default withRouter(withStyles(useStyles)(SingleColorPalette))
