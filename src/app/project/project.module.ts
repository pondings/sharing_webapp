import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MaterializeModule } from 'ng2-materialize';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterializeModule
  ],
  declarations: [ProjectComponent, ProjectListComponent]
})
export class ProjectModule { }
