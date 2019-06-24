import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SearchStarComponent } from './search-star/search-star.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HomeModule } from './home/home.module';
import { AppHeaderModule } from './app-header/app-header.module';
import { AppFooterModule } from './app-footer/app-footer.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        AppHeaderModule,
        AppFooterModule,
        HomeModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService
        )
    ],
    declarations: [
        AppComponent,
        SearchMovieComponent,
        SearchStarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
