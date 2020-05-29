import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';
import { SelectByIdComponent } from './select-by-id/select-by-id.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  { path: 'create', component: CreateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'select', component: SelectComponent },
  { path: 'selectByPId', component:  SelectByIdComponent},
  { path: 'deleteById', component:  DeleteComponent},
  { path: 'update', component:  UpdateComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
