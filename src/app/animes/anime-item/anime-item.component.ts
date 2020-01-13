import { AnimeService } from './../shared/anime.service';
import { Anime } from './../shared/animes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.css']
})
export class AnimeItemComponent implements OnInit {

  @Input()
  anime: Anime;

  @Output()
  onDeleteAnime = new EventEmitter();

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
  }

  onDelete(anime: Anime) {
    console.log(anime._id);
    this.animeService.delete(anime._id).subscribe(() => {
      this.onDeleteAnime.emit(anime);
    });
  }

}
