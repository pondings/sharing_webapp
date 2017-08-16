import { ProjectService } from './../../shared/services/project.service';
import { Project } from './../../shared/models/Project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projectList: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.findAllProject();
  }

  private findAllProject() {
    this.projectService.findAllProject().subscribe(
      (res) => this.projectList = res,
      (error) => console.log(error)
    );
  }

}
