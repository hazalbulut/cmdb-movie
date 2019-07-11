import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { HomeModule } from './views/home/home.module';
import { AppHeaderModule } from './components/app-header/app-header.module';
import { AppFooterModule } from './components/app-footer/app-footer.module';
import { SearchMovieModule } from './views/search-movie/search-movie.module';
import { SearchStarModule } from './views/search-star/search-star-module';
import { StarModule } from './views/star/star.module';
import { MovieModule } from './views/movie/movie.module';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        AppHeaderModule,
        AppFooterModule,
        HomeModule,
        SearchMovieModule,
        SearchStarModule,
        StarModule,
        MovieModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService
        )
    ],
    declarations: [
        AppComponent,
    ],
    providers: [InMemoryDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
