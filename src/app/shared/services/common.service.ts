import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class CommonService {

  protected url: string = environment.api;

  constructor(protected http: Http) { }

  public createObject(): Observable<any> {
    return null;
  }

  public findObject(): Observable<any> {
    return null;
  }

  public findAllObject(targetPath: string): Observable<any[]> {
    const options = this.getOptions();
    return this.http.get(this.url + targetPath, options).map(this.extractData).catch(this.handlerError);
  }

  public updateObject(): Observable<any> {
    return null;
  }

  public deleteObject(): Observable<any> {
    return null;
  }

  protected getOptions(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  protected extractStatusCode(res: Response) {
    if (res.status === 200) {
      return res.status;
    }
  }

  protected extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  protected handlerError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }


}
