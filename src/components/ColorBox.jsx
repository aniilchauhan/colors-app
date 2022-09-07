import styled from '@emotion/styled';
import { Box, Button, Grid } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover';
import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const OverlayBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
    opacity: "0",
    zIndex: "0",
    position: "absolute",
    transition: "transform 0.6 ease-in-out",

    // "&:hover":{
    //     opacity: "1",
    //     zIndex: "10",
    //     transform: "scale(10)",
    //     position: "absolute",
    // }

}));

// const Overlay = {
//     opacity: "1",
//     zIndex: "10",
//     transform: "scale(10)",
//     position: "absolute",
// }
export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleCopy = () => {
        this.setState({
            show: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    show: false
                })
            }, 1500);
        })
    }
    render() {
        return (
            <Grid item md={3} sm={4} sx={8}>
                <CopyToClipboard text={this.props.obj.color} onCopy={() => this.handleCopy()}>
                    <Box sx={{ backgroundColor: this.props.obj.color, height: "20vh", display: "flex", alignItems: "flex-end", position: "relative" }}>
                       {this.state.show&&<OverlayBox sx={{
                            backgroundColor: this.props.obj, 
                            opacity: "1",
                            zIndex: "10",
                            width: "25px",
                            // transform: "scale(10)",
                            position: "absolute"
                        }} />}
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "5px" }}>
                            <span>{this.props.obj.name}</span>
                            <span>More</span>
                        </Box>
                        <Button variant='contained' color='secondary' sx={{
                            position: "absolute", top: '50px', left: "40%", opacity: "0", ':hover': {
                                opacity: "1"
                            }
                        }}>Copy</Button>
                    </Box>
                </CopyToClipboard>
            </Grid>
        )
    }
}

export default ColorBox
