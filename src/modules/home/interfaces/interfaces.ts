export interface MovieCard {
    id: string; 
    title: string; 
    description: string; 
    category: string; 
    duration: string; 
    restriction: string; 
    type: string; 
    url: string;
}

export interface MovieKeepWatch {
    id: string;
    duration:string;
    ulr: string
}

export interface MovieCardState {
    movies: MovieCard[],
}

export interface MovieKeepWatchState {
    movies: MovieKeepWatch[]
}
