import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,myRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VotingComponent } from './voting/voting.component';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionComponent } from './position/position.component';
//import { ScheduleService } from './schedule/schedule.service';




@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    myRouting,
    VotingComponent,
    PositionComponent   
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //providers: [ScheduleService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }