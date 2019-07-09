import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HomeModule } from './home/home.module';
import { AppHeaderModule } from './app-header/app-header.module';
import { AppFooterModule } from './app-footer/app-footer.module';
import { SearchMovieModule } from './search-movie/search-movie.module';
import { SearchStarModule } from './search-star/search-star-module';

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
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService
        )
    ],
    declarations: [
        AppComponent
    ],
    providers: [InMemoryDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
