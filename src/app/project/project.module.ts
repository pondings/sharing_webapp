import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

/**
 * Third-Party
 */
import { MaterializeModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterializeModule
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
