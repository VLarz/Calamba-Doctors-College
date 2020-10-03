import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { BasicEducationComponent } from './academics/basic-education/basic-education.component';
import { AboutComponent } from './about/about-cdc/about.component';
import { CollegeComponent } from './academics/college/college.component';
import { RequirementsComponent } from './admissions/requirements/requirements.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BasicEducationComponent,
    AboutComponent,
    CollegeComponent,
    RequirementsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPageScrollCoreModule.forRoot({duration: 300, scrollOffset: 50}),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
