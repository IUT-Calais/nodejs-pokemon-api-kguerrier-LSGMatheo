import{ Request, Response } from 'express';
import prisma from '../client';

export const getPokemonCards = async (req: Request, res: Response) => {
    const pokemon=await prisma.pokemonCard.findMany();
    res.status(200).send(pokemon);

}

export const getPokemonCardsById = async (req: Request, res: Response) => {
    const pokemonCardId = req.params.pokemonCardId;
    const pokemon=await prisma.pokemonCard.findUnique({where: { id: Number(pokemonCardId) }});
    res.status(200).send(pokemon);

}