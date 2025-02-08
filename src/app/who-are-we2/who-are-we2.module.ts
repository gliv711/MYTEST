import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WhoAreWe2Component } from './who-are-we2.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:WhoAreWe2Component}
    ])
  ]
})
export class WhoAreWe2Module { }
