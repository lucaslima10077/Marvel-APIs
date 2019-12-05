import { Images } from './../models/images';
import { Observable } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ComicService } from './shared/comic-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicSvc: ComicService) { }
  allComics: Images;

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.comicSvc.getComics().subscribe(data => {
      this.allComics = data;
    });
  }
}
