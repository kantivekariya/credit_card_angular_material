import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'card'
  },
  {
    path: 'card',
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
