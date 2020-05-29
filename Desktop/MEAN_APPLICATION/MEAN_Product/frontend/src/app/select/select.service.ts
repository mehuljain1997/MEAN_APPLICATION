import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http : HttpClient) { }

  getAllRecord(data: any): Observable<any> {
    return this.http.get("http://localhost:3000/notes", data);

  }
}
