import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksReadComponent } from './component/books-read/books-read.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ResourcesComponent } from './component/resources/resources.component';
import { TechnologiesComponent } from './component/technologies/technologies.component';
import { WorksComponent } from './component/works/works.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'works',
        component: WorksComponent
      },
      {
        path: 'resources',
        component: ResourcesComponent
      },
      {
        path: 'technologies',
        component: TechnologiesComponent
      },
      {
        path: 'books-read',
        component: BooksReadComponent
      },
      {
        path: 'contact-me',
        component: ContactMeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
