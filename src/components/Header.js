import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(themme=>({
    root: {
        color: "white",
        backgroundColor: "rgb(22, 22, 37)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "8vh",
        fontSize: "2.5vh"
    },
    title:{
        fontSize: '5vh'
    }
}));
export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}> Pokedex </Typography>
        </div>
    )
}
