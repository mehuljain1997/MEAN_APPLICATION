import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  PId: number;
  PType: String;
  PName: String;
  constructor(private http: HttpClient) { }



  // getUpdateBody(pid,pname,ptype)
  // { 
  //   this.PId = pid;
  //   this.PName = pname;
  //   this.PType = ptype;


  // }

  Updaterecord(data: any): Observable<any>
  {
  console.log('data',data)
  this.PId = data.PId;;
  console.log('update id',this.PId);

   
   // return this.http.post("http://localhost:3000/notes", body )
   return this.http.put(`http://localhost:3000/notes/${this.PId}` , data)
  }

 
}
