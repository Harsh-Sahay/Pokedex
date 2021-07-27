import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ComplexButton from "./ComplexButton";
import { useSelector, useDispatch } from "react-redux";
import Fab from "@material-ui/core/Fab";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import {updateOffset} from '../actions';
const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    width: "100vw",
    display: "inline-flex",
    // gridTemplateColumns: "10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw",
    // gridTemplateRow: "30vh",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "0px",
  },
  button:{
    backgroundColor: 'white',
    color: 'black',
    margin: '0px',
    padding: '1vh',
    height: '6vh',
    width: '3vw'
  },
  icon:{
    height: '3vh',
    width: '3vw',
    padding: '0px',
    margin: '0px'
  }
}));
export default function Body() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokemonData);
  const offset = useSelector(state=>state.offset);

  const incrementOffset = ()=>{
      dispatch(updateOffset(offset+4));
  }

  const decrementOffset = ()=>{
      if(offset!==0)
        dispatch(updateOffset(offset-4));
  }

  return (
    <div className={classes.root}>
      <Fab className={classes.button} color="primary" disabled={offset===0?true:false} onClick={()=>decrementOffset()}>
        <SkipPreviousIcon className={classes.icon}/>
      </Fab>
      {data ? (
        data.results.map((ele) => (
          <ComplexButton pokemonData={ele} key={ele.name} />
        ))
      ) : (
        <h1>Waiting to load...</h1>
      )}
      <Fab className={classes.button} color="primary" onClick={()=>incrementOffset()}>
        <SkipNextIcon className={classes.icon} />
      </Fab>
    </div>
  );
}
