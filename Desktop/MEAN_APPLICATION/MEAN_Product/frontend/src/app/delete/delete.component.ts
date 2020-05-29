import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteService } from './delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router, private deleteService: DeleteService) { }

  public k: any;
  xyz: any;
  xy: any;
  ngOnInit() {
   
  }

  
  DeleteToHome() {
    this.router.navigate(['/home'])

  }

  deleteByPId(Id){

    console.log('py',Id)
 this.k = Id;
// this.deleteService.getPId(this.k);
    this.xyz = Id;
    this.deleteService.deleteRecordByPId(Id).subscribe((result: any) => {
      console.log('res',result);
      alert(result.message)
      this.xy = result.message;
    
   //   console.log('xy',this.xy)

  })

}
}
