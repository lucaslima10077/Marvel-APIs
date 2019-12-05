import { Images } from './../../models/images';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  URL_API = `https://gateway.marvel.com:443/v1/public/comics?apikey=59cb3d88a270df9f7b5290785097d2a8`;

  constructor(private http: HttpClient) { }

  getComics(): Observable<Images> {
    return this.http.get<Images>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
