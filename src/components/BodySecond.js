import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import background from "../resource/pokemon.png";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "92vh",
    width: "100vw",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
  },
  card: {
    height: "50vh",
    width: "50vw",
    backgroundImage: `url(${background})`,
    backgroundPosition: "cover",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  head: {
    backgroundColor: "black",
    color: "white",
    fontSize: "5vh",
    display: "inline-flex",
    alignItem: "center",
    justifyContent: "center",
    height: "8vh",
    width: "50vw",
    margin: "0px",
    padding: "0px",
  },
  body: {
    backgroundColor: 'crimson',
    position: 'relative',
    fontSize: "3vh",
    display: "inline-flex",
    justifyContent: "space-between",
    width: "50vw",
    height: "7vh",
    top: '8vh'
  },
}));
export default function BodySecond() {
  const classes = useStyles();
  const PokeData = useSelector((state) => state.specificPokemonData);
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.head}>{PokeData?.name.toUpperCase()}</div>
        <div className={classes.body}>
          <p>Base Experience: {PokeData?.base_experience}</p>
          <p>Height: {PokeData?.height}</p>
          <p>Weight: {PokeData?.weight}</p>
        </div>
      </div>
    </div>
  );
}
