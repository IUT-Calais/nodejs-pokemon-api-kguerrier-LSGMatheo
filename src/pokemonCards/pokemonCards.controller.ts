import{ Request, Response } from 'express';
import prisma from '../client';

export const getPokemonCards = async (_req: Request, res: Response) => {
    const pokemon=await prisma.pokemonCard.findMany();
    res.status(200).send(pokemon);

}