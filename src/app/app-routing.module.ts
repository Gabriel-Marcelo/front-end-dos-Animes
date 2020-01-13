import { AnimeFormComponent } from './animes/anime-form/anime-form.component';
import { AnimeListComponent } from './animes/anime-list/anime-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: AnimeListComponent},
  {path: 'new', component: AnimeFormComponent},
  {path: 'edit/:id', component: AnimeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
