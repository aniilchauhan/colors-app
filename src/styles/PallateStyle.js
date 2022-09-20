import bg from "./bg.svg"

export default{
    root: {
      backgroundColor: "blue",
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: 'center',
      // overflow:"scroll",
      backgroundColor: "#394bad",
      backgroundImage: `url(${bg})`,
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: 'space-between',
      alignItems:"center",
      color: "white"
    },
    palletes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3,30%)",
      gridGap: "5%"
  
    },
    goBack:{
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom:"-3.5px",
        background: "black",
      },
      backButton:{
        width: "100px",
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
        color:"white",
        textTransform:"upperCase",
        textDecoration:"none"
      }
  }