export const topicPrimaryStyle = (theme) =>{
    return {
        root:{
            display:'flex',
            alignItems:'center'
        },
        title:{
            color:'#555'
        },
        tab:{
            backgroundColor:theme.palette.primary[600],
            textAlign:'center',
            display:"inline-block",
            padding:'0 6px',
            borderRadius:3,
            marginRight:10,
            fontSize:'12px',
            color:'#fff'
        },
        top:{
            backgroundColor: theme.palette.accent[500],
        }
    }
}

export const topicSecondaryStyle = (theme)=> {
    return {
        root:{
            display:'flex',
            alignItems:'center',
            paddingTop:3
        },
        count:{
            textAlign:'center',
            margin:'0 20px'
        },
        userName:{
            marignRight:20,
            color:'#9E9E9E'
        },
        accentColor:{
            color:theme.palette.accent[500]
        }
    }
}