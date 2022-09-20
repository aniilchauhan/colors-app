import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/styles';
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

const useStyles = theme => ({
    inputBox: {

    }
})

export class PalatteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage:"form",
            newPaletteName: ""
        }
    }
    componentDidMount = () => {
        ValidatorForm.addValidationRule('isPalatteNameUnique', value => {
            return this.props.palattes.every(
                ({ paletteName }) => (paletteName !== value.toLowerCase())
            );
        });
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDialog = () => {
        this.setState({
            open: !this.state.open
        })
        this.props.showForm()
    }
    showEmojiPicker = ()=>{
        this.setState({
            stage:"emoji"
        })
    }
    savePalette = (e)=>{
        const newPalette = {
            paletteName:this.state.newPaletteName,
            emoji:e.native
        }
        this.props.handleSubmit(newPalette)
    }
    render() {
        const { stage, newPaletteName } = this.state
        const { classes } = this.props
        return (
            <>
                <Dialog open={stage === "emoji"} onClose={() => this.handleDialog()}>
                <DialogTitle>Choose a Palatte Emoji</DialogTitle>
                    <Picker title="pick a palette emoji" data={data} onEmojiSelect={(e)=>this.savePalette(e)} />
                </Dialog>
                <Dialog open={stage === "form"} onClose={() => this.handleDialog()}>
                    <DialogTitle>Choose a Palatte Name</DialogTitle>
                    <ValidatorForm onSubmit={() => this.showEmojiPicker()} className={classes.inputBox}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter name for your palatte
                            </DialogContentText>
                            <TextValidator
                                lable="palette name"
                                name='newPaletteName'
                                variant="filled"
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.newPaletteName}
                                validators={['required', "isPalatteNameUnique"]}
                                errorMessages={['this field is required', "enter different palette name"]}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.handleDialog()}>Cancel</Button>
                            <Button variant="contained"
                                color='primary'
                                type={'submit'}>save palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </>
        )
    }
}

export default withStyles(useStyles)(PalatteMetaForm)
