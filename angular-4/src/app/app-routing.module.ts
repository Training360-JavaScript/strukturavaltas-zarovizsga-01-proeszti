import { CarEditorComponent } from 'src/app/page/car-editor/car-editor.component';
import { CarComponent } from 'src/app/page/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
  {
    path: '/car/edit/44',
    component: CarEditorComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
