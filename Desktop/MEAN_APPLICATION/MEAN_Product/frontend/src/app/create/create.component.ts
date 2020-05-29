import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from './create.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  abc : any;
  xy: any;
  body: any;

  constructor(private router: Router, private createservice : CreateService,) { 
    console.log('inside com')
  }

  ngOnInit() {


  }

  createfunction(prdctid, pname, ptype) {
    console.log('inside createfunction', prdctid)
    console.log('pname', pname)
    console.log('ptype', ptype)
  //  this.createservice.getBody(prdctid,pname,ptype);
       this.body = {
      "PId":prdctid,
      "Ptitle": ptype,
      "PName": pname            
    }
    this.createservice.SaveRecord(this.body).subscribe((result: any) => {
      console.log('result' ,result);
      this.xy = result;
      console.log('xy',this.xy)
      });
     

  }


  BackToHome() {
    this.router.navigate(['/home'])
  }





  


  

  

}
