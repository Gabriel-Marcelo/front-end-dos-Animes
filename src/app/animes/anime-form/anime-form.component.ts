import { Component, OnInit } from '@angular/core';
import { Anime } from '../shared/animes';
import { AnimeService } from '../shared/anime.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {

  anime: Anime = new Anime();
  title: string = 'Salvar um anime';
  constructor(
    private animeService: AnimeService,
    private router: Router,
    private activatedRouter: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id) {
      this.animeService.getById(id).subscribe((value) => {
        this.anime = value;
        this.title = 'Alterando um anime';
      });
    }
  }

  onSubmit() {
    this.animeService.save(this.anime).subscribe(anime => {
      this.router.navigate(['']);
    });
  }

}
