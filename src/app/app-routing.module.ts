import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VotingComponent } from './voting/voting.component';
import { RegistrationComponent} from './registration/registration.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'schedule', component: ScheduleComponent},
  {path:'vote',component:VotingComponent},
  {path:'position',component:PositionComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'landing-page',component:LandingPageComponent},
  {path:'logout',component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRouting=[HomeComponent,ScheduleComponent];
