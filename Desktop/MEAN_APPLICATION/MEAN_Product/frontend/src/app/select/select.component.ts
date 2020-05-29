import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectService } from './select.service';
import { DeleteService } from '../delete/delete.service'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  abc : any;
  xy: any ;
  xyz: any;
  constructor(private router: Router, private selectService : SelectService, private deleteService: DeleteService) { }

  ngOnInit() {
    this.findAllData();
   
  }


  BackToHome() {
    this.router.navigate(['/home'])
  }


   findAllData() {
     this.abc = {};
     this.selectService.getAllRecord(this.abc).subscribe((result: any) => {
     console.log('result' ,result);
     this.xy = result;
     console.log('xy',this.xy)
     })
    

   }


   deleteRow(PID)
   {   
    console.log('inside deleteRow');
    console.log('PID',PID);
    this.deleteService.deleteRecordByPId(PID).subscribe((result: any) => {
      console.log('res');
     // this.router.navigate(['/select'])
     this.findAllData();

  })
     
   }

   


}
