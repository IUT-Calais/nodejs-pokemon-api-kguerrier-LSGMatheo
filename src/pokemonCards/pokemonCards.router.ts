import { Router } from 'express';
import { createPokemonCards, getPokemonCards, getPokemonCardsById } from './pokemonCards.controller';

export const pokemonCardRouter = Router();
// Route pour obtenir la liste des utilisateurs
pokemonCardRouter.get('/', getPokemonCards);

pokemonCardRouter.get('/:pokemonCardId', getPokemonCardsById);

pokemonCardRouter.post('/', createPokemonCards);