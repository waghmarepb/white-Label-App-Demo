import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly config = environment.config;
  constructor(private readonly http: HttpClient) { }

  public getDataFromJson(): Observable<any> {
    return this.http.get(`assets/data/${this.config}/index.json`);
  }
}
