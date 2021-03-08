import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BarraNavComponent } from './component/barra-nav/barra-nav.component';
import { PreloadComponent } from './component/preload/preload.component';
import { WorksComponent } from './component/works/works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { MaterialModule } from './material/material.module';
import { ResourcesComponent } from './component/resources/resources.component';
import { TechnologiesComponent } from './component/technologies/technologies.component';
import { LayoutComponent } from './component/layout/layout.component';
import { BooksReadComponent } from './component/books-read/books-read.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContacformModule } from './contac-form/contacform.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

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
    MaterialModule,
    ReactiveFormsModule,
    ContacformModule,
    HttpClientModule,
    FormsModule,
    NgxTypedJsModule,
    AngularFireModule.initializeApp(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
