// When applied to an element in a template, makes that element a link that initiates navigation to a route.
//  Navigation opens one or more routed components in one or more <router-outlet> locations on the page.

/*
You can use absolute or relative paths in a link, 
set query parameters, 
control how parameters are handled, 
and keep a history of navigation states.
*/

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './home/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/login/dashboard/dashboard.component';
import { ProfileComponent } from './home/login/dashboard/profile/profile.component';
import { GuidelinesComponent } from './home/login/dashboard/projects/guidelines/guidelines.component';
import { ProjectsComponent } from './home/login/dashboard/projects/projects.component';
import { NotesComponent } from './home/login/dashboard/projects/notes/notes.component';
import { ProjectComponent } from './home/login/dashboard/projects/project/project.component';
import { LoginComponent } from './home/login/login.component';
import { SidenavComponent} from './home/login/sidenav/sidenav.component';
import { ChatboxComponent } from './home/login/dashboard/chatbox/chatbox.component';
import { HomenavbarComponent } from './home/homenavbar/homenavbar.component';
import { InnernavComponent } from './home/login/dashboard/projects/topnav/innernav/innernav.component';
import { ProjectWriteComponent } from './home/login/dashboard/projects/project/project-write/project-write.component';
import { ProjectStatusComponent } from './home/login/dashboard/projects/project/project-status/project-status.component';
import { BlogOpComponent } from './home/blog-op/blog-op.component';
import { ProjectEventsComponent } from './home/login/dashboard/projects/project/project-events/project-events.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'guidelines', component:GuidelinesComponent},
  {path: 'notes', component:NotesComponent},
  {path: 'project', component:ProjectComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'sidenav', component:SidenavComponent},
  {path: 'chatbox', component:ChatboxComponent},
  {path: 'homenavbar', component:HomenavbarComponent},
  {path: 'innernav', component:InnernavComponent},
  {path: 'project-write', component:ProjectWriteComponent},
  {path: 'project-status', component:ProjectStatusComponent},
  {path: 'blog-op', component:BlogOpComponent},
  {path: 'project-events', component:ProjectEventsComponent},
  {path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
