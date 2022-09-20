import React, { Component } from 'react'
import { generatePalette } from './colorsHelper'
import NewPalette from './components/NewPalette'
import Pallate from './components/Pallate'
import { ColorsArr } from './seedColors'
import {
  Routes,
  Route,
} from "react-router-dom";
import SingleColorPalette from './components/SingleColorPalette'
import NewPaletteForm from './components/NewPaletteForm'

export class App extends Component {
  constructor(props){
    super(props);
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    this.state={
      palettes: savedPalettes || ColorsArr
    }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
    this.deletePalette = this.deletePalette.bind(this)

  }
  findPalette(id){
    this.state.palettes.find(function(palette){
      return palette.id === id;
    })
  }
  deletePalette = (id) =>{
    console.log("object",id)
    this.setState(
      st => ({palettes: st.palettes.filter(palette => palette.id !== id)}),this.syncLocalStorage
    )
  }
  savePalette(newPalette){
    this.setState({
      palettes:[...this.state.palettes,newPalette]
    },this.syncLocalStorage)
  }
  syncLocalStorage = () =>{
    window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))
  }
  render() {
    return (
      <Routes>
        <Route path='/palette/new' element={<NewPaletteForm savePalette={this.savePalette} palattes={this.state.palettes}/>}/>
        <Route path='/' element={<Pallate Pallate={this.state.palettes} deletePalette={this.deletePalette}/>}/>
        {/* <Route path='palette/:id' element={<NewPalette  palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>} /> */}
        <Route path='palette/:id' element={<NewPalette Pallate={this.state.palettes} {...this.props}/>} />
        <Route path='palette/:paletteId/:colorId' element={<SingleColorPalette Pallate={ColorsArr} {...this.props}/>} />
      </Routes>
    )
  }
}

export default (App)
