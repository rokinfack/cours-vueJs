import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../donnees-pokemons/pokemon";
import { POKEMONS } from "../donnees-pokemons/mock-pokemons";
// importation d'angular le router pour les liens
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit{
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService ){
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id).subscribe( pokemon => this.pokemon = pokemon)
  }

  goBack():void{
    this.router.navigate(['/pokemon/all']);
  }

  goEdit(pokemon: Pokemon){
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

}