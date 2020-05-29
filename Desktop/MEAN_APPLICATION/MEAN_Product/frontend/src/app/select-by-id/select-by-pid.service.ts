import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SelectByIdComponent } from './select-by-id.component';


@Injectable({
  providedIn: 'root'
})
export class SelectByPIdService {


  

   PId: Number = 101;
  
  constructor(private http: HttpClient) {

   }

 /* getId(x) 
   {
     console.log('get')
   this.PId = x
   }*/

  
  getRecordByPId(data: any): Observable<any> {
   
   // console.log('final PId',this.PId)
    console.log('data',data)
    return this.http.get('http://localhost:3000/notes/'+ data);

  }


}
