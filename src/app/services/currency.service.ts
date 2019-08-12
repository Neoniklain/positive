import {catchError, map} from 'rxjs/operators';
import {ErrorHandlerService} from './error-handler.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import {CurrencyType} from '../enums/currency-type.enum';

@Injectable()
export class CurrencyService {
  private cbrUrl = 'https://api.exchangeratesapi.io/latest?base=USD';

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  public Get(currencyType: CurrencyType): Observable {
    return this.http.get(this.cbrUrl)
      .pipe(
        map((res: number) => res.rates[currencyType.toString()]),
        catchError(e => this.errorHandler.handle(e))
      );
  }

}
