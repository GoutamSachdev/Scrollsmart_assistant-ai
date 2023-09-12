import { makeStyles } from "@material-ui/core/styles";
import React from 'react'

export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,

    },
    card:{
       display:'flex' ,
       flexDirection:'column',
       justifyContent:'space-between',
       alignItems:'center',
       width:'100%',
       height:'45vh',
       padding:'10%',
       borderRadius:13,
       color:'white'
    },
    info:{
        display:'flex',
        flexDirection: 'column',
        textAlign:'center'
    }

})
