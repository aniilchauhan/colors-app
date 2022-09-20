import React, { Component } from 'react'
import ColorBox from './ColorBox'
import { withStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Navbar from './Navbar';
import withRouter from './WithRouter';
import { generatePalette } from '../colorsHelper';
import PaletteFooter from './PaletteFooter';
import useStyles from "../styles/NewPaletteStyle"


export class NewPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format:"hex",
      currentColor:""
    }
    this.changeFormat = this.changeFormat.bind(this);
  }
  componentDidMount = ()=>{
    this.props?.Pallate?.map((color)=>{
     if(color.id===this.props.router.params.id){
     this.setState({
      currentColor:generatePalette(color)
     })
     }
    })
  }
  handleChange = (level) => {
    this.setState({
      level:level
    })
  }
  changeFormat = (val)=>{
   this.setState({
    format:val
   })
  }
  render() {
    const { Pallate, classes} = this.props
    const {level,format} = this.state
    return (
      <div className={classes.palette}>
      <Navbar level={level} handleChange={this.handleChange} handleSelect={this.changeFormat} showingAllColors={true}/> 
        <div className={classes.paletteColors}>
          {this.state.currentColor && this.state.currentColor.colors[level].map((color,i)=>{
            return <ColorBox showingFullPalette={true} background={color[format]} name={color.name} key={i} id={color.id} paletteId={this.state.currentColor.id} />
          })}
        </div>
       <PaletteFooter emoji={this.state.currentColor.emoji} paletteName = {this.state.currentColor.paletteName}/>
      </div>
    )
  }
}

// export default NewPalette
export default withRouter(withStyles(useStyles)(NewPalette))
