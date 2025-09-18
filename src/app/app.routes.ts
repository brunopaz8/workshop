import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeColaboradorComponent } from './pages/home-colaborador/home-colaborador.component';
import { ContentWorkshopComponent } from './pages/content-workshop/content-workshop.component';

export const routes: Routes = [
  {
    path: ``,
    component: HomeComponent,
    pathMatch: `full`
  },
  {
    path: `colaboradores`,
    component: HomeColaboradorComponent
  },
  {
    path: 'workshops/:id/graficos',
    component: ContentWorkshopComponent
  }
];
