import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectByPIdService } from './select-by-pid.service';

@Component({
  selector: 'app-select-by-id',
  templateUrl: './select-by-id.component.html',
  styleUrls: ['./select-by-id.component.css']
})
export class SelectByIdComponent implements OnInit {

  xyz: any;
  constructor(private router: Router, private selectByPIdServie :SelectByPIdService ) { }

 
public p: any;
 xy: any;

  
  fetchByPId(py) {
    console.log('py',py);
 this.p = py;
// this.selectByPIdServie.getId(this.p);
 //   this.xyz = {};
    this.selectByPIdServie.getRecordByPId(py).subscribe((result: any) => {
      console.log('res',result);
      this.xy = result;   
    })
   
    console.log('x1',this.p);
   

  }

  ngOnInit() {
    this.fetchByPId(this.p)
    
  }



  MoveToHome() {
    this.router.navigate(['/home'])
  }

}
