import { environment } from './../../../environments/environment';
import { Anime } from './animes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  save(anime: Anime) {
    const animeBody = {
      animePreferido: anime.animePreferido,
      personagemPreferido: anime.personagemPreferido
    };
    if (anime._id) {
      return this.http.put<Anime>(`${environment.api}/animes/${anime._id}`, animeBody);
    }
    return this.http.post<Anime>(`${environment.api}/animes`, animeBody);
  }

  getAll() {
    return this.http.get<Anime[]>(`${environment.api}/animes`);
  }

  getById(id: string) {
    return this.http.get<Anime>(`${environment.api}/animes/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/animes/${id}`);
  }

}
