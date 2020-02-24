import { Injectable } from '@angular/core';
import {PriceCard} from '../classes/pricecard/pricecard';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private url = 'http://localhost:3001';

  constructor(private httpClient: HttpClientModule, private http: HttpClient) { }

  public getTemplates(): Observable<any> {
    return this.http.get<PriceCard>(this.url + '/api/templates');
  }

  public postTemplate(template: PriceCard): Observable<any> {
    return this.http.post<PriceCard>(this.url + '/api/templates', template)
  }

  public getTemplate(id): Observable<any> {
    return this.http.get<PriceCard>(this.url + `/api/templates/${id}`);
  }

  public deleteTemplate(id): Observable<any>{
    return this.http.delete(this.url + `/api/templates/${id}`)
  }

}
