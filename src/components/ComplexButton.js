import {React, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ButtonBase, Typography } from '@material-ui/core';
import {updateSpecificPokemonLink, fetchSpecificPokemon} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      // minWidth: 200,
      width: '15vw',
      margin: '5vh 1vw',
      height: '27vh'
    },
    image: {
      position: 'relative',
      height: '30vh',
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: '30vh',
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '0.5vh solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: '0vw',
      right: '0vw',
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      height: '5vh',
      width: '3.3vw',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      height: '30vh',
      width: '15vw',
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      height: '15vh',
      width: '15vw',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      fontSize: '2vh',
      // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: '0.3vh',
      width: '3vw',
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: 0,
      left: 'calc(50% - 1.vw)',
      transition: theme.transitions.create('opacity'),
    },
  }));
export default function ComplexButton({pokemonData}) {
    const classes = useStyles();
    const pokeLink = useSelector(state=>state.pokemonLink);
    const dispatch = useDispatch();
    const history = useHistory();
    const clickHandler = ()=>{
      dispatch(updateSpecificPokemonLink(pokemonData.url));
      dispatch(fetchSpecificPokemon());
      history.push("/page2");
    }
    // useEffect(()=>{
    //   if(pokeLink){
    //   dispatch(fetchSpecificPokemon());
    //   }
    // },[pokeLink]);
    return (
        <div className={classes.root}>
           <ButtonBase
          focusRipple
          key={pokemonData.name}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '15vw',
          }}
          onClick={()=>clickHandler()}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: "url('')",
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {pokemonData.name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase> 
        </div>
    )
}
