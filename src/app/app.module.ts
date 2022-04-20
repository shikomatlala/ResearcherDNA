import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavService } from './services/navs/sidenav.service';
import { ProjectObjectService } from './home/login/dashboard/projects/project-object.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { BlogComponent } from './home/blog/blog.component';
import { DashboardComponent } from './home/login/dashboard/dashboard.component';
import { ProfileComponent } from './home/login/dashboard/profile/profile.component';
import { ProjectsComponent } from './home/login/dashboard/projects/projects.component';
import { NotesComponent } from './home/login/dashboard/projects/notes/notes.component';
import { GuidelinesComponent } from './home/login/dashboard/projects/guidelines/guidelines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './home/login/dashboard/projects/project/project.component';
import { SidenavComponent } from './home/login/sidenav/sidenav.component';
import { TopnavComponent } from './home/login/dashboard/projects/topnav/topnav.component';
import { ChatboxComponent } from './home/login/dashboard/chatbox/chatbox.component';
import { HomenavbarComponent } from './home/homenavbar/homenavbar.component';
import { InnernavComponent } from './home/login/dashboard/projects/topnav/innernav/innernav.component';
import { ProjectWriteComponent } from './home/login/dashboard/projects/project/project-write/project-write.component';
import { GlobalVariables } from './globals';
import { ProjectStatusComponent } from './home/login/dashboard/projects/project/project-status/project-status.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BlogOpComponent } from './home/blog-op/blog-op.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BlogComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectsComponent,
    NotesComponent,
    GuidelinesComponent,
    ProjectComponent,
    SidenavComponent,
    TopnavComponent,
    ChatboxComponent,
    HomenavbarComponent,
    InnernavComponent,
    ProjectWriteComponent,
    ProjectStatusComponent,
    BlogOpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [SidenavService, 
    GlobalVariables, 
    ApiserviceService,
    ProjectObjectService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
