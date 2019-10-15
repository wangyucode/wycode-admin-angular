import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getError(day: string, code: string) {
    const params = new HttpParams()
      .append('day', day)
      .append('code', code);
    return this.http.get(environment.baseUrl + '/admin/dashboard/errorPath', { params });
  }

  getAccess(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get(environment.baseUrl + '/admin/dashboard/visitors', { params });
  }

  getAppUse(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get(environment.baseUrl + '/admin/dashboard/appUse', { params });
  }

  getBlogAccess(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get(environment.baseUrl + '/admin/dashboard/blogAccess', { params });
  }

  getAccessGeo(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get(environment.baseUrl + '/admin/dashboard/geo', { params });
  }
}
