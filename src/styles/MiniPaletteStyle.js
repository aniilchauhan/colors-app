export default {
    root: {
      backgroundColor:"white",
      border:"1px solid black",
      borderRadius: "5px",
      padding:"0.5rem",
      position:"relative",
      overflow:"hidden",
      cursor:"pointer",

      "&:hover svg":{
        opacity: "1"
      }
     
    },
    colors: {
      backgroundColor:"#dae1e4",
      height:"100px",
      width:"100%",
      borderRadius:"5px",
      overflow: "hidden",
    },
    title: {
     display:"flex",
     justifyContent:"space-between",
     alignItems:"center",
     margin:"0",
     color:'black',
     paddingTop:"0.5rem",
     paddingBottom:"0.8rem",
     position:'relative'
    },
    emoji:{
      marginLeft:"0.5rem",
      fontSize:"1.5rem"
    },
    miniColor:{
      height:"25%",
      width:"20%",
      display:"inline-block",
      margin:"0 auto",
      position:"realtive",
      marginBottom:"-3.5px"
    },
    delete:{

    },
    deleteIcon:{
       color:"white",
       backgroundColor:"red",
       width: "20px",
       height: "20px",
       position: "absolute",
       right:"0px",
       top:"0px",
       padding:"5px",
       opacity:"0",
      
    }
      }