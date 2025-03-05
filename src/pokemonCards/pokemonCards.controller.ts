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

export const createPokemonCards = async (req: Request, res: Response) => {
    const {
        id : id, 
        name : name, 
        pokedexId : pokedexId, 
        typeId : typeId, 
        lifePoints : lifePoints, 
        size : size, 
        weight : weight, 
        imageUrl : imageUrl
    } = req.body;
    const pokemon=await prisma.pokemonCard.create({ data : {
        id,
        name,
        pokedexId,
        typeId,
        lifePoints,
        size,
        weight,
        imageUrl
    }});
    res.status(200).send(pokemon);
}

export const updatePokemonCards = async (req: Request, res: Response) => {
    const pokemonCardId = req.params.pokemonCardId;
    const {
        id : id, 
        name : name, 
        pokedexId : pokedexId, 
        typeId : typeId, 
        lifePoints : lifePoints, 
        size : size, 
        weight : weight, 
        imageUrl : imageUrl
    } = req.body;
    const pokemon=await prisma.pokemonCard.update(
        {where: { id: Number(pokemonCardId) },
        data : {
            name,
            pokedexId,
            typeId,
            lifePoints,
            size,
            weight,
            imageUrl
        }});
    res.status(200).send(pokemon);
}

export const deletePokemonCards = async (req: Request, res: Response) => {
    const pokemonCardId = req.params.pokemonCardId;
    const pokemon=await prisma.pokemonCard.delete({where: { id: Number(pokemonCardId) }});
    res.status(200).send(pokemon);
}