import request from 'supertest';
import { app } from '../src';
import { prismaMock } from './jest.setup';

describe('PokemonCard API', () => {
  describe('GET /pokemons-cards', () => {
    it('should fetch all PokemonCards', async () => {
      const mockPokemonCards = [
        { 
          id : 1,
          name:'Bulbizard',
          pokedexId: 1,
          typeId: 4,
          lifePoints : 50,
          size : 0.7,
          weight : 6.9,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"    
        },
        {
          id : 2,
          name:'Herbizarre',
          pokedexId: 2,
          typeId: 4,
          lifePoints : 60,
          size : 1.0,
          weight : 13.0,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png"
        },
        {
          id : 3,
          name:'Florizarre',
          pokedexId: 3,
          typeId: 4,
          lifePoints : 70,
          size : 2.0,
          weight : 100.0,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png"
        }
      ];
      prismaMock.pokemonCard.findMany.mockResolvedValue(mockPokemonCards);

      const response = await request(app)
      .get('/pokemons-cards')
      .set('Authorization', 'Bearer mockedToken');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPokemonCards);
    });
  });

  describe('GET /pokemons-cards/:pokemonCardId', () => {
    it('should fetch a PokemonCard by ID', async () => {
      const mockPokemonCards = { 
          id : 1,
          name:'Bulbizard',
          pokedexId: 1,
          typeId: 4,
          lifePoints : 50,
          size : 0.7,
          weight : 6.9,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"    
        };
        prismaMock.pokemonCard.findUnique.mockResolvedValue(mockPokemonCards);

      const response = await request(app)
      .get('/pokemons-cards/1')


      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPokemonCards);
    });

    it('should return 404 if PokemonCard is not found', async () => {
       const mockPokemonCards = { 
          id : 1,
          name:'Bulbizard',
          pokedexId: 1,
          typeId: 4,
          lifePoints : 50,
          size : 0.7,
          weight : 6.9,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"    
        };

      prismaMock.pokemonCard.findUnique.mockResolvedValue(mockPokemonCards);
      const response = await request(app)
      .get('/pokemons-cards/5')

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'PokemonCard not found' });
    });
  });

  describe('POST /pokemons-cards', () => {
    it('should create a new PokemonCard', async () => {
      const mockPokemonCards = {   
        };
      const createdPokemonCard = {
        id : 1,
          name:'Bulbizard',
          pokedexId: 1,
          typeId: 4,
          lifePoints : 50,
          size : 0.7,
          weight : 6.9,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
      };
      prismaMock.pokemonCard.create.mockResolvedValue(createdPokemonCard);
      const response = await request(app)
      .post('/pokemons-cards/')
      .send(createdPokemonCard)

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdPokemonCard);
    });
  });

  describe('PATCH /pokemons-cards/:pokemonCardId', () => {
    it('should update an existing PokemonCard', async () => {
      const mockPokemonCards = { 
          id : 1,
          name:'Bulbizard',
          pokedexId: 1,
          typeId: 4,
          lifePoints : 50,
          size : 0.7,
          weight : 6.9,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"    
        };
      const updatedPokemonCard = {
        id : 1,
          name:'Bulbizard',
          pokedexId: 1,
          typeId: 4,
          lifePoints : 300,
          size : 0.7,
          weight : 6.9,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"  
      };
      prismaMock.pokemonCard.update.mockResolvedValue(updatedPokemonCard);
      const response = await request(app)
      .patch('/pokemons-cards/1')
      .send(updatedPokemonCard)
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedPokemonCard);
    });
  });

  describe('DELETE /pokemons-cards/:pokemonCardId', () => {
    it('should delete a PokemonCard', async () => {
      const mockPokemonCards = [
        { 
          id : 1,
          name:'Bulbizard',
          pokedexId: 1,
          typeId: 4,
          lifePoints : 50,
          size : 0.7,
          weight : 6.9,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"    
        },
        {
          id : 2,
          name:'Herbizarre',
          pokedexId: 2,
          typeId: 4,
          lifePoints : 60,
          size : 1.0,
          weight : 13.0,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png"
        },
        {
          id : 3,
          name:'Florizarre',
          pokedexId: 3,
          typeId: 4,
          lifePoints : 70,
          size : 2.0,
          weight : 100.0,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png"
        }
      ];

      const deletedPokemonCard = [
        {
          id : 2,
          name:'Herbizarre',
          pokedexId: 2,
          typeId: 4,
          lifePoints : 60,
          size : 1.0,
          weight : 13.0,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png"
        },
        {
          id : 3,
          name:'Florizarre',
          pokedexId: 3,
          typeId: 4,
          lifePoints : 70,
          size : 2.0,
          weight : 100.0,
          imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png"
        }
      ];
        
      prismaMock.pokemonCard.delete.mockResolvedValue(deletedPokemonCardPokemonCard);
      const response = await request(app)
      .delete('/pokemons-cards/1')

      expect(response.status).toBe(204);
      expect(response.body).toEqual(deletedPokemonCard);
    });
  });
});
