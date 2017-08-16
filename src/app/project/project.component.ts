import { Project } from './../shared/models/Project';
import { ProjectService } from './../shared/services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
