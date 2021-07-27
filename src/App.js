import {React, useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Header, Body, Footer} from './components';
import background from './resource/background.png';
import {fetchPokemonDetails} from './actions';

const useStyles = makeStyles(theme=>({
  root:{
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw'
  }
}));


function App() {

  const data = useSelector(state=>state.pokemonData);
  const offset = useSelector(state=>state.offset);

  const dispatch = useDispatch();
  const classes = useStyles();

useEffect(()=>{
  dispatch(fetchPokemonDetails());

},[offset]);


  return (
    <div className={classes.root} >
      <Header/>
      {data?<Body/>:<h1>Loading Data...</h1>}
      {/* <Footer data={data} offset={offset} setOffset={setOffset}/> */}
    </div>
  );
}

export default App;
