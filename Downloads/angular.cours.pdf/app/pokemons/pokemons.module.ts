import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './list-pokemon/pokemons.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directives/border-card.directive';

import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { PokemonsService } from './pokemons.service';

@NgModule({
  declarations: [
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonsComponent,
    FormPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [PokemonsService],
  bootstrap: []  
})
export class PokemonsModule { }
