import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharingRoutingModule } from './sharing-routing.module';
import { SharingComponent } from './sharing.component';

@NgModule({
  imports: [
    CommonModule,
    SharingRoutingModule,
    RouterModule
  ],
  declarations: [SharingComponent]
})
export class SharingModule { }
