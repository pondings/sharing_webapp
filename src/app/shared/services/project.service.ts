import { Observable } from 'rxjs/Observable';
import { Project } from './../models/Project';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService extends CommonService {

  private path = 'project';

  public findAllProject(): Observable<Project[]> {
    return this.findAllObject(this.path);
  }

}
