import React, { Component } from 'react'
import Pallate from './components/Pallate'
import { ColorsArr } from './seedColors'

export class App extends Component {
  render() {
    return (
      <div>
        <Pallate {...ColorsArr[5]}/>
      </div>
    )
  }
}

export default App
