import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PalatteMetaForm from './PalatteMetaForm';


const useStyles = theme => ({
    navBtns: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: "15px",
        right: "10px",

        "& a":{
            textDecoration:"none"
        }
    },
    inputBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    button:{
        margin:"0 4px !important",

    }
})

const drawerWidth = 400;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export class PalatteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",
            formShowing: false
        }
    }
    componentDidMount = () => {
        ValidatorForm.addValidationRule('isPalatteNameUnique', value => {
            return this.props.palattes?.every(
                ({ paletteName }) => (paletteName !== value.toLowerCase())
            );
        });
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    showForm = () => {
        this.setState({
            formShowing: !this.state.formShowing
        })
    }
    render() {
        const { open, classes, palattes, handleSubmit } = this.props
        const { newPaletteName } = this.state
        return (
            <div>
                <CssBaseline />
                <AppBar position="fixed" open={open} color="default">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => this.props.handleDrawer()}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Create a Palatte
                        </Typography>
                        <div className={classes.navBtns}>
                            <Link to={"/"}>
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color='secondary'>
                                    Go Back
                                </Button>
                            </Link>
                            <Button
                                variant="contained"
                                onClick={() => this.showForm()}
                                className={classes.button}
                            >
                                Save
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                {this.state.formShowing && <PalatteMetaForm palattes={palattes} handleSubmit={handleSubmit} showForm={this.showForm} />}
            </div>
        )
    }
}

export default withStyles(useStyles)(PalatteFormNav)
