import { Injectable } from "@angular/core";
import { Pokemon } from "./donnees-pokemons/pokemon";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable()
export class PokemonsService{

  constructor(private http: HttpClient){}

  private pokemonsUrl = 'api/pokemons';

  private log(log:string){
    console.info(log);
  }

  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> =>{
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    );
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon>{
    const url = `${this.pokemonsUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id =${id}`))
    );
  }

    //édition
    updatePokemon(pokemon: Pokemon): Observable<Pokemon>{
      const httOptions = {
        headers: new HttpHeaders({'content-type' : 'application/json'})
      };

      return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httOptions).pipe(
        tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
        catchError(this.handleError<Pokemon>('updatedPokemon failed'))
      );

      //suppression
      
    }


  getPokemonTypes(): string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Vol', 'Poison'];
  }

}