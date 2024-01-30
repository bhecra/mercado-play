import { MovieCard } from "../interfaces/interfaces";

interface ActionsTypes {
    type:'ITEMS_REQUEST'
}


export const movieReducer = ( state: MovieCard[], action: ActionsTypes) => {
    switch (action.type) {
        case 'ITEMS_REQUEST':
            return state;
    
        default:
            return state;
    }

}
