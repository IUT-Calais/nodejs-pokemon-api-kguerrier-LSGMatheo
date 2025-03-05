import { Router } from 'express';
import { createPokemonCards, getPokemonCards, getPokemonCardsById, updatePokemonCards, deletePokemonCards} from './pokemonCards.controller';

export const pokemonCardRouter = Router();

pokemonCardRouter.get('/', getPokemonCards);

pokemonCardRouter.get('/:pokemonCardId', getPokemonCardsById);

pokemonCardRouter.post('/', createPokemonCards);

pokemonCardRouter.patch('/:pokemonCardId', updatePokemonCards);

pokemonCardRouter.delete('/:pokemonCardId', deletePokemonCards);