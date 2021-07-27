import OffsetReducer from './OffsetReducer';
import PokemonDataReducer from './PokemonDataReducer';
import {combineReducers} from 'redux';
import LinkReducer from './LinkReducer';
import SpecificPokemonReducer from './SpecificPokemonReducer';

const rootReducer = combineReducers({
    offset: OffsetReducer,
    pokemonData: PokemonDataReducer,
    pokemonLink: LinkReducer,
    specificPokemonData: SpecificPokemonReducer
});
export default rootReducer;