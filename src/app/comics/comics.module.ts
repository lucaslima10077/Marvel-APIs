import { ComicsRoutingModule } from './comics-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { MatCardModule, MatFormFieldModule, MatListModule, MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    ComicsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComicsModule { }
