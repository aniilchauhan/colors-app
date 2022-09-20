import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button, Divider } from '@mui/material';
import withRouter from './WithRouter';
import DraggableColorList from '../DraggableColorList';
import {arrayMoveImmutable} from 'array-move';
import PalatteFormNav from './PalatteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    container: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    buttons: {
     width: "100%"
    },
    button: {
        width: "50%"
    }
})


const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    }

    constructor(props) {
        super(props);
        this.state = {

            open: false,
            currentColor: "#447272",
            colors: props.palattes[0].colors,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDrawer = this.handleDrawer.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    handleDrawer = () => {
        this.setState({
            open: !this.state.open
        })
    }
    addColor = (newColor) => {

        this.setState({
            colors: [...this.state.colors, newColor],
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (newPalette) => {
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
        newPalette.colors=this.state.colors
        this.props.savePalette(newPalette)
        this.props.router.navigate("/")
    }
    removeColor = (colorName) => {
        console.log(colorName,"remove")
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        })
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMoveImmutable(colors, oldIndex, newIndex),
        }));
    };
    addRandomColor = () => {
        const allColors = this.props.palattes.map(p => p.colors).flat();
        var rand = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[rand];
        this.setState({
            colors: [...this.state.colors, randomColor]
        })
    }
    clearPalatte = () => {
        this.setState({
            colors: []
        })
    }
    render() {
        const { open, currentColor, colors } = this.state;
        const { classes, palattes } = this.props;
        const palatteIsFull = this.state.colors.length >= this.props.maxColors
        return (
            <Box sx={{ display: 'flex' }}>
                <PalatteFormNav open={open} palattes={palattes} handleSubmit={this.handleSubmit} handleDrawer={this.handleDrawer}/>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={() => this.handleDrawer()}>
                            {<ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <div className={classes.container}>
                        <Typography variant='h5' gutterBottom>Design Your Palette</Typography>
                        <div className={classes.buttons}>
                            <Button variant="contained" className={classes.button} color={"secondary"} onClick={() => this.clearPalatte()}>Clear Palette</Button>
                            <Button variant="contained" className={classes.button} color={"primary"} onClick={() => this.addRandomColor()} disabled={palatteIsFull}>Random Color</Button>
                        </div>
                        <ColorPickerForm palatteIsFull={palatteIsFull} addColor={this.addColor}  colors={colors} />
                    </div>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                   <Box sx={{ height: "97%",}}>
                   <DraggableColorList colors={colors}  removeColor={this.removeColor} axis={"xy"} onSortEnd={this.onSortEnd}/>
                   </Box>
                </Main>
            </Box>
        )
    }
}

export default withRouter(withStyles(useStyles)(NewPaletteForm))




