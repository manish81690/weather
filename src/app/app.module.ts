import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { WheatherComponent } from './wheather/wheather.component';

@NgModule({
    declarations: [
    AppComponent,
    AboutComponent,
    WheatherComponent
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }