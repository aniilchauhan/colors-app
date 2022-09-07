import React, { Component } from 'react'
import { withStyles } from '@mui/styles'

const styles = {
    main:{
        backgroundColor:"purple",
        border:"3px solid teal"
    }
}

export class MiniPalette extends Component {
  render() {
    return (
      <div>
       <h1>Mini palette</h1> 
      </div>
    )
  }
}

export default withStyles(styles)(MiniPalette)
