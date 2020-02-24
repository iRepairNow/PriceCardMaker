import {Injectable} from '@angular/core';
import {PriceCard} from '../classes/pricecard/pricecard';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricecardsService {

  private url = 'http://localhost:3001';

  constructor(private httpClient: HttpClientModule, private http: HttpClient) {
  }

  public getPriceCards(): Observable<any> {
    return this.http.get<PriceCard>(this.url + '/api/pricecards');
  }

  public getPriceCard(id): Observable<any> {
    return this.http.get<PriceCard>(this.url + `/api/pricecards/${id}`);
  }

  public deletePriceCard(id): Observable<any>{
    return this.http.delete(this.url + `/api/pricecards/${id}`)
  }

  public deleteAllPriceCards(): Observable<any>{
    return this.http.delete(this.url + `/api/pricecards/delete`)
  }

  public postPriceCard(priceCard: PriceCard): Observable<any> {
    return this.http.post<PriceCard>(this.url + '/api/pricecards', priceCard)
  }

}
