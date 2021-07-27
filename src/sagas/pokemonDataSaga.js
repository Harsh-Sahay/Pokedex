import { takeLatest, call, put, select } from 'redux-saga/effects';
import {fetchPokemonData} from '../api/index';
import {updatePokemonData} from '../actions/index';
const offset_check = state=>state.offset;
function* fetchPokemonData_Worker(){
    try{
        const offset = yield select(offset_check);
        const pokeData = yield call(fetchPokemonData, offset);
        yield put(updatePokemonData(pokeData));
    }
    catch(error){
            console.log("error from Pokemon Data Saga", error.toString());
    }
}

function* fetchPokemonData_Listener(){
    yield takeLatest("FETCH_POKEMON_DETAILS", fetchPokemonData_Worker);
}

export default fetchPokemonData_Listener;