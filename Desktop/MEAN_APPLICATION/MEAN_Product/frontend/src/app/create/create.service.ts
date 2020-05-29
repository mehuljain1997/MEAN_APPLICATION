import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { CreateComponent } from './create.component';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
 Pid: number;
 Pname: String;
 Ptype: string;
  constructor(private http : HttpClient) { }

 /* getBody(prdctid,prdctname,prdcttype )
  {
  this.Pid = prdctid;
  this.Pname = prdctname;
  this.Ptype = prdcttype
  }*/
  
  SaveRecord(data: any): Observable<any> {
    console.log('data',data)
  
 /*   var body = {
      "PId":this.Pid,
      "Ptitle": this.Ptype,
      "PName": this.Pname            
    }*/
    return this.http.post("http://localhost:3000/notes", data )


  }
}
