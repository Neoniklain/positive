import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs/internal/observable/throwError';


@Injectable()
export class ErrorHandlerService {

  constructor() {
  }

  public handle(error: HttpErrorResponse | any): Observable<any> {
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {
      const body = error.error || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    if (error.status === 403 || error.status === 401) {
      console.error('Аторизация не удалась.');
    } else {
      console.error('Не удалось выполнить запрос. Повторите попытку позже.', 'Ошибка выполнения');
    }
    return throwError(errMsg);
  }
}
