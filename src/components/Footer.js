import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme=>({
    root: {
        backgroundColor: "rgb(255, 255, 255)",
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        color: 'white'
        
    },
    pageBar:{
        fontSize: '2vh',
        color: "white"
    }
}));
export default function Footer({data, setOffset}) {
    const classes = useStyles();

    const changeHandler = (e, page)=>{
        setOffset(page-1);

    }

    return (
        <div className={classes.root}>
        <Pagination className={classes.pageBar} count={data?Math.floor(data.count/20):0} variant="outlined" color="primary" onChange={(e, page)=>changeHandler(e, page)} />    
        </div>
    )
}
