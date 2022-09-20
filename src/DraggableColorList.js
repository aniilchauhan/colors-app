import React from 'react'
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './components/DraggableColorBox';


const DraggableColorList = SortableContainer(
 ({colors,removeColor})=>{
    return (
    <div style={{height:"100%"}}>
    {colors.map((color, i) => {
                    return <DraggableColorBox distance={20} color={color.color} name={color.name} removeColor={() => removeColor(color.name)} key={i} index={i}/>
                })}
  </div>)
 }
)

export default DraggableColorList
