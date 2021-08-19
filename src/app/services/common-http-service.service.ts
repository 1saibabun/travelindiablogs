import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonHttpServiceService {

  constructor(public http: HttpClient) { }

  // to read data from mockdata
  public getData(apiUrl): Observable<any[]> {
    return this.http.get<any[]>(apiUrl)
  }
}
