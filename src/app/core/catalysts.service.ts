import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IHeroes } from '../shared/interfaces';

@Injectable()
export class CatalystsService {

    baseUrl: string = 'assets/';
    
    constructor(private http: HttpClient) { }

    getHeroes() : Observable<any> {
        return this.http.get(this.baseUrl + 'heroes-catalysts.json')
            .pipe(
                catchError(this.handleError)
            );
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}