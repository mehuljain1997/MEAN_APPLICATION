import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  public ProductId;
  msg: any
  constructor(private http : HttpClient) { }


//   getPId(x)
//   {
// this.ProductId = x
//   }


  deleteRecordByPId(data: any): Observable<any> {  
    console.log('data',data) 
   // console.log('final PId',this.ProductId)
   return this.http.delete<any>('http://localhost:3000/notes/' + data);
  }
  


}
