import { StarComponent } from './star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRoutingModule } from './star-routing.module';

@NgModule({
  declarations: [
    StarComponent,
  ],
  imports: [
    CommonModule,
    StarRoutingModule
  ]
})
export class StarModule { }
