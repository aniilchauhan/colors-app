import React from 'react'
import { withStyles } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement} from 'react-sortable-hoc';
import { Button } from '@mui/material';

const useStyles = theme => ({
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",

        "&:hover svg":{
            color:"white",
            transform:"scale(1.5)"
        }

    },
    boxContent: {
        position: "absolute",
        padding:"10px",
        width: "100%",
        left:"0px",
        bottom:"0px",
        color:"black",
        letterSpacing:"1px",
        textTransform:"upperCase",
        fontSize:"12px",
        display: "flex",
        justifyContent:"space-between"
    },
}
)

// const handleClick = (name)=>{
//    this.props.removeColor(name);
//    console.log("clicked")
// }
// const handleClick = (name,removeColor)=>{
//     console.log(name)
//     removeColor(name)
// }

const DraggableColorBox = SortableElement(
    ({classes, color, name,removeColor})=>{
        return (
            <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
            <span> {name}</span>
            {/* <Button variant='contained' onClick={()=> removeColor(name)} color={"error"} size="small" sx={{    minWidth: "30px",
    padding: "2px 2px"}}>X</Button> */}
            {/* <span><DeleteIcon className={classes.deleteIcon} onClick={()=> removeColor(name)} /></span> */}
        <DeleteIcon  style={{ transition:"all 0.3s ease-in-out"}} onClick={()=> removeColor(name)} />

            </div>
            </div>
        )
    }
   )

export default withStyles(useStyles)(DraggableColorBox)