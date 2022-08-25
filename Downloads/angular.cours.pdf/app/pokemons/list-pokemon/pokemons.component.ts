import{ Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html',
})
export class PokemonsComponent implements OnInit{
  //déclaration d'une variable
  pokemons: Pokemon[];

  constructor(private router: Router, private pokemonsService: PokemonsService){
    this.pokemons = [];
  }

  ngOnInit(): void {
      this.pokemonsService.getPokemons().subscribe( pokemons => this.pokemons = pokemons)
  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  
}