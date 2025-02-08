import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './CONTENT/content.component';

const routes: Routes = [
  {path : '', component : ContentComponent},
  {path : 'who-are-we1', loadChildren : () => import ('./who-are-we1/who-are-we1.module').then((m) => m.WhoAreWe1Module)},
  {path : 'who-are-we2', loadChildren : () => import('./who-are-we2/who-are-we2.module').then((m) => m.WhoAreWe2Module)},
  {path : '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
