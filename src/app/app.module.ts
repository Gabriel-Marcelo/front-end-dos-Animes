import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './animes/anime-list/anime-list.component';
import { AnimeFormComponent } from './animes/anime-form/anime-form.component';
import { AnimeItemComponent } from './animes/anime-item/anime-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    AnimeFormComponent,
    AnimeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
