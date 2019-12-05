import { Images } from './../../../models/images';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=59cb3d88a270df9f7b5290785097d2a8`;

  constructor(private http: HttpClient) {}

    getAllCharacters(): Observable<Images> {
      return this.http.get<any>(this.URL_API)
        .pipe(map((data: any) => data.data.results));
    }


}

