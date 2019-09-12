import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface ErrorElement {
  path: string;
  method: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http: HttpClient) {
  }

  getError(day: string, code: string) {
    const params = new HttpParams()
      .append('day', day)
      .append('code', code);
    return this.http.get(environment.baseUrl + '/admin/dashboard/errorPath', { params });
  }
}
