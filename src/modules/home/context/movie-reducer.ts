import { MovieCard } from "../interfaces/interfaces";

interface ActionsTypes {
    type:'ITEMS_REQUEST',
    payload: MovieCard[]
}


export const movieReducer = ( state: MovieCard[], action: ActionsTypes) => {
    switch (action.type) {
        case 'ITEMS_REQUEST':
            return action.payload;
    
        default:
            return state;
    }

}
