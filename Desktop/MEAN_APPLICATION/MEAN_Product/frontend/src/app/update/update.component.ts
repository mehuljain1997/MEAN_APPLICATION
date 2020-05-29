import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  xy: any;
  abc: any;
  pid: Number;
  Pname: string;
  Ptype: string;var
  body: any;
  constructor(private router: Router, private updateserve : UpdateService) { }

  ngOnInit() {

  }

  updatefunction(prdctid,prdctname,prdcttype){
    console.log('prdctid',prdctid);
    console.log('prdctname',prdctname);
    console.log('prdcttype',prdcttype);

// this.updateserve.getUpdateBody(prdctid,prdctname,prdcttype);
 this.abc = {}
 this.body = {
  "PId":prdctid,
  "Ptitle": prdcttype,
  "PName": prdctname            
}
 this.updateserve.Updaterecord(this.body).subscribe((result: any)=> {
      console.log('result',result);
      alert(result.message)
   this.xy = result.message;
   console.log('xy record',this.xy)


 })





  
}

  UpdateToHome() {
    console.log('inside update');
    this.router.navigate(['/home']);

  }

}
