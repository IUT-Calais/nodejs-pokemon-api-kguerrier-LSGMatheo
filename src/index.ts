import express from 'express';
import { Request, Response } from 'express';


export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

export const server = app.listen(port);

export function stopServer() {
  server.close();
}

app.get('/pokemons-cards', (_req: Request, _res: Response) => {
  _res.status(200).send('Liste de tous les Pokémons');
});

app.get('/pokemons-cards/:pokemonCardId', (_req: Request, _res: Response) => {
  _res.status(200).send('Liste de tous les Pokémons avec id');
});

app.post('/pokemons-cards', (_req: Request, _res: Response) => {
  _res.status(200).send('post: Liste de tous les Pokémons');
});

app.patch('/pokemon-cards/:pokemonCardId', (_req: Request, _res: Response) => {
  _res.status(200).send('post: Liste de tous les Pokémons avec id');
});

app.delete('/pokemon-cards/:pokemonCardId', (_req: Request, _res: Response) => {
  _res.status(200).send('Liste de tous les Pokémons');
});