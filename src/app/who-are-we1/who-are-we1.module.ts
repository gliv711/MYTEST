import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WhoAreWe1Component } from './who-are-we1.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:WhoAreWe1Component}
    ])
  ]
})
export class WhoAreWe1Module { }
