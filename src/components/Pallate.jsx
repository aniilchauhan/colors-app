import { Grid } from '@mui/material'
import React, { Component } from 'react'
import ColorBox from './ColorBox'
import MiniPalette from './MiniPalette'

export class Pallate extends Component {
  render() {
    const colors = this.props.colors
    return (
      <div style={{height:"100vh"}}>
      <MiniPalette/>
       <Grid container>
       {colors.map((obj,i)=>{
         return <ColorBox obj={obj} key={i}/>
        })}
       </Grid>
      </div>
    )
  }
}

export default Pallate
