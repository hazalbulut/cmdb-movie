
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterModule } from './components/app-footer/app-footer.module';
import { AppHeaderModule } from './components/app-header/app-header.module';
import { HomeModule } from './views/home/home.module';
import { MovieModule } from './views/movie/movie.module';
import { NotFoundModule } from './views/not-found/not-found.module';
import { SearchMovieModule } from './views/search-movie/search-movie.module';
import { SearchStarModule } from './views/search-star/search-star-module';
import { StarModule } from './views/star/star.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppHeaderModule,
        AppFooterModule,
        HomeModule,
        SearchMovieModule,
        SearchStarModule,
        StarModule,
        MovieModule,
        NotFoundModule,
        HttpClientModule,
        AppRoutingModule

    ],
    declarations: [
        AppComponent,
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
