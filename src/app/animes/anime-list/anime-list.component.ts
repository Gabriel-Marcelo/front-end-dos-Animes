import { AnimeService } from './../shared/anime.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from '../shared/animes';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  anime: Anime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getAll().subscribe((value) => {
      this.anime = value;
    });
  }

  remove(anime: Anime) {
    const index = this.anime.findIndex((value) => value._id == anime._id);
    this.anime.splice(index, 1);
  }

}
