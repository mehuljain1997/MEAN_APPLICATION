import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatInputModule,MatFormFieldModule,MatOptionModule,MatSelectModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { SelectComponent } from './select/select.component';
import { SelectByIdComponent } from './select-by-id/select-by-id.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';













@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    DeleteComponent,
    SelectComponent,
    SelectByIdComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
    
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
