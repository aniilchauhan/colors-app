import React, { Component } from 'react';
import ChromePicker from "react-color"
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    picker:{
      width:"100% !important",
      marginTop:"2rem"
    },
    addColor:{
        width:"100% !important",
        padding:"1rem",
        marginTop:"1rem",
        fontSize:"2rem"
    },
    colorInput:{
        width: "100%",
        height:"70px"
    }
})



export class ColorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state={
            currentColor: "#447272",
            newColorName: "",
        }
    }
    componentDidMount = () => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
           return this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            );
        });
        ValidatorForm.addValidationRule('isColorUnique', value => {
            console.log(value)
            return this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            );
        });   
    }
    updateCurrentColor = (newColor) => {
        this.setState({
            currentColor: newColor.hex
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = ()=>{
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addColor(newColor)
        this.setState({
            newColorName:""
        })
    }
  render() {
    const {palatteIsFull,classes} = this.props;
    const {currentColor} = this.state
    return (
      <div>
      <ChromePicker color={currentColor} onChangeComplete={(newColor) => this.updateCurrentColor(newColor)} className={classes.picker} />
      <ValidatorForm onSubmit={() => this.handleSubmit()}>
          <TextValidator
              value={this.state.newColorName}
              className={classes.colorInput}
              name="newColorName"
              variant="filled"
              margin="normal"
              placeholder='Color Name'
              onChange={(e) => this.handleChange(e)}
              validators={['required', "isColorNameUnique","isColorUnique"]}
              errorMessages={['this field is required', "enter different color name","select different color"]}
          />
          <Button variant="contained"
              color={"primary"}
              className={classes.addColor}
              style={{ backgroundColor: palatteIsFull ? "grey" : currentColor }}
              disabled={palatteIsFull}
              type={"submit"}>{palatteIsFull?"Palatte Is Full":"Add Color"}</Button>
      </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(useStyles)(ColorPickerForm)
