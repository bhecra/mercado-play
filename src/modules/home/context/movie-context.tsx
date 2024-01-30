import { createContext } from "react";
import { MovieCard } from "../interfaces/interfaces";

export const MovieContext =  createContext<MovieCard[]>([]);
