import { Images } from './../models/images';
import { Observable, observable } from 'rxjs';
import { CharactersApiService } from './shared/characters-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private CharacterSvc: CharactersApiService) { }
  allCharacteres: Images;

  async ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.CharacterSvc.getAllCharacters().subscribe(data => {
      this.allCharacteres = data;
    });
  }
}
