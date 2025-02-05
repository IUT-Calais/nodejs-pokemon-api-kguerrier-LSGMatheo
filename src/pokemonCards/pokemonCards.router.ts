import { Router } from 'express';
import { getPokemonCards } from './pokemonCards.controller';

export const pokemonCardRouter = Router();
// Route pour obtenir la liste des utilisateurs
pokemonCardRouter.get('/', getPokemonCards);