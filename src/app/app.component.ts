import { Component } from '@angular/core';
import {PokemonService} from './pokemon.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bunqget-front';

  private ditto$: Observable<any>;

  constructor(private pokemonService: PokemonService) {
    this.ditto$ = this.getDitto();
  }

  getDitto() {
    return this.pokemonService.getPokemon('ditto');
  }
}
