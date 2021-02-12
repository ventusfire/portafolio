import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { PreloadComponent } from './preload/preload.component';
import { WorksComponent } from './works/works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { MaterialModule } from './material/material.module';
import { ResourcesComponent } from './resources/resources.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { LayoutComponent } from './layout/layout.component';
import { BooksReadComponent } from './books-read/books-read.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContacformModule } from './contacform/contacform.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraNavComponent,
    PreloadComponent,
    WorksComponent,
    HomeComponent,
    ResourcesComponent,
    TechnologiesComponent,
    LayoutComponent,
    BooksReadComponent,
    FooterComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    MaterialModule,
    ReactiveFormsModule,
    ContacformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
