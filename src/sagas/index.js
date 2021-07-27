import fetchPokemonData_Listener from './pokemonDataSaga';
import fetchSpecificPokemonData_Listener from './specificPokemonDataSaga';
import {all} from 'redux-saga/effects';


export default function* rootSaga(){
    yield all([fetchPokemonData_Listener(), fetchSpecificPokemonData_Listener()]);
}