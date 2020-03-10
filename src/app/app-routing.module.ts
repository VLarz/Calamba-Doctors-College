import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AboutComponent } from './about/about-cdc/about.component';
import { BasicEducationComponent } from './academics/basic-education/basic-education.component';
import { CollegeComponent } from './academics/college/college.component';
import { RequirementsComponent } from './admissions/requirements/requirements.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'about', component: AboutComponent},
  { path: 'basic-education', component: BasicEducationComponent},
  { path: 'college', component:CollegeComponent},
  { path: 'requirements', component: RequirementsComponent},
  { path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
