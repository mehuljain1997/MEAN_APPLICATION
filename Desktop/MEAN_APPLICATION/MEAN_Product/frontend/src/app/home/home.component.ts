import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectvalue =  ["create","delete", "update", "selectAll", "seleteById"]
  

  constructor(private router: Router, private homeservice: HomeService) {        
  }

  ngOnInit() {
  }


  navigate1(){
    console.log('inside function of navigate1');
    this.router.navigate(['/create']);
}


SelectRecord() {
  console.log('inside  selectrecord');
  this.router.navigate(['/select']);

}

SelectByPId() {
  console.log('inside  selectrecord');
  this.router.navigate(['/selectByPId']);

}

DeleteRecord()
{
  console.log('inside  deleterecord');
  this.router.navigate(['/deleteById']);
}

UpdateRecord() {
  console.log('inside  updaterecord');
  this.router.navigate(['/update']);
}




selectedOperation(operation: string)
{
  console.log('op',operation);

  switch(operation)
  {
    
    case "create":
       // if modo 1 is selected do something.
       console.log('work1')
       this.navigate1();
       break;

       case "delete":
        console.log('work2')
        this.DeleteRecord();
         break;
      case "selectAll":
         // if modo 3 is selected do something.
         console.log('work3')
         this.SelectRecord();
         break;
         case "seleteById":
          // if modo 3 is selected do something.
          console.log('work4')
          this.SelectByPId();
          break;
          case "update":
            // if modo 3 is selected do something.
            console.log('work5')
            this.UpdateRecord();
            break;
  }
}

modo(value: string){
  switch(value) {
    case "mod1":
       // if modo 1 is selected do something.
       console.log('work1')
       this.navigate1();
       break;
    case "mod2":
      console.log('work2')
      this.DeleteRecord();
       break;
    case "mod3":
       // if modo 3 is selected do something.
       console.log('work3')
       this.SelectRecord();
       break;
       case "mod4":
        // if modo 3 is selected do something.
        console.log('work4')
        this.SelectByPId();
        break;
        case "mod5":
          // if modo 3 is selected do something.
          console.log('work5')
          this.UpdateRecord();
          break;
  }
}




}
