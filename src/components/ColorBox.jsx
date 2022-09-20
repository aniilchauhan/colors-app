import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import withRouter from './WithRouter';
import useStyles from "../styles/ColorBoxStyle"



export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    handleCopy = () => {
        this.setState({
            copied: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    copied: false
                })
            }, 1500);
        })
    }
    render() {
        const { classes, background, name,paletteId,id,showingFullPalette } = this.props
        const {copied} = this.state
        return (
            <CopyToClipboard text={background} onCopy={() => this.handleCopy()}>
            <div style={{ background }} className={classes.ColorBox}>
            <div style={{ background }} className={`${classes.CopyOverlay} ${copied && classes.show}`}/>
            <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
                <h1>Copied!!</h1>
                <p className={classes.copyText}>{background}</p>
            </div>
                <div className={classes.CopyContainer}>
                    <div className={classes.BoxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.CopyButton}>Copy</button>
                </div>
                {showingFullPalette && <Link to={`/palette/${paletteId}/${id}`} onClick={e=>e.stopPropagation()}>
                <span className={classes.SeeMore}>MORE</span>
                </Link>}
            </div>
            </CopyToClipboard>
        )
    }
}

export default withRouter(withStyles(useStyles)(ColorBox))
