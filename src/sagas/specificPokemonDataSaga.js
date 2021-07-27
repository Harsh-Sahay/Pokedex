import { takeLatest, call, put, select } from 'redux-saga/effects';
import {fetchSpecificPokemonData} from '../api/index';
import {updateSpecificPokemonData} from '../actions/index';
const linkFetch = state=>state.pokemonLink;
function* fetchSpecificPokemonData_Worker(){
    try{
        const link = yield select(linkFetch);
        const pokeSpecificData = yield call(fetchSpecificPokemonData, link);
        console.log("hel", pokeSpecificData);
        yield put(updateSpecificPokemonData(pokeSpecificData));
    }
    catch(error){
            console.log("error from Pokemon Data Saga", error.toString());
    }
}

function* fetchSpecificPokemonData_Listener(){
    yield takeLatest("FETCH_SPECIFIC_POKEMON", fetchSpecificPokemonData_Worker);
}

export default fetchSpecificPokemonData_Listener;