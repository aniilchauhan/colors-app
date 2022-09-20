import chroma from 'chroma-js';

export default {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom:"-3.5px",

        '&:hover':{
            "& $CopyButton": {
                opacity: "1",
                transition: "0.5sec"
              }
        },
        
        "@media (max-width: 900px)" :{
            width: "50%",
        },
        "@media (max-width: 500px)" :{
            width: "100%",
        },

    },
    CopyContainer: {
     
    },
    BoxContent: {
        position: "absolute",
        padding:"10px",
        width: "100%",
        left:"0px",
        bottom:"0px",
        color:"black",
        letterSpacing:"1px",
        textTransform:"upperCase",
        fontSize:"12px",
    },
    lightText:{
        color:"white"
    },
    CopyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top:"50%",
        left:"50%",
        marginLeft:"-50px",
        margintTop:"-15px",
        textAlign:"center",
        border:"none",
        background: "rgba(255,255,255,0.3)",
        fontSize:"1rem",
        lineHight:"30px",
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
        textTransform:"upperCase",
        opacity: "0",
    },
    SeeMore:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
        background: "rgba(255,255,255,0.3)",
        position:"absolute",
        border:"none",
        right:"0px",
        bottom:"0px",
        width: "60px",
        height:"30px",
        textAlign:"center",
        lineHight:"30px",
        textTransform:"uppperCase"
    },
    darkText:{
        color:"black"
    },
    CopyOverlay:{
        opacity:"0",
        zIndex:"0",
        width: "100%",
        height: "100%",
        transform:"scale(0.1)",
        transition: "0.6s ease-in-out",

    },
    show:{
     opacity: "1",
     transform:"scale(50)",
     zIndex:"10",
     position: "absolute"
    },
    copyMsg:{
        position: "fixed",
        top:"0",
        left:"0",
        right:"0",
        bottom:"0",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"4rem",
        transform:"scale(0.1)",
        opacity:"0",
        color:"white",
        flexDirection:"column",

        "& h1":{
            fontWeight:"400",
            textShadow:"1px 2px black",
            background: "rgba(255,255,255,0.2)",
            width: "100%",
            textAlign:"center",
            marginBottom:"0",
            padding: "1rem",
            textTransform:"upperCase"
        },
        "& p":{
            fontSize:"2rem",
            fontWeight:"100"
        }
    },
    showMsg:{
      opacity:"1",
      transform: "scale(1)",
      zIndex:"25",
      transition: "all 0.4s ease-in-out",
      transitionDelay:"0.3s"

    },
    copyText:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName:{
        color: props => chroma(props.background).luminance() <=0.08 ? "white" : "black"
    }

}