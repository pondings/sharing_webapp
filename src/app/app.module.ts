import { ProjectService } from './shared/services/project.service';
import { HttpModule } from '@angular/http';
import { CommonService } from './shared/services/common.service';
import { SharingModule } from './sharing/sharing.module';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Third-Party
 */
import { MaterializeModule } from 'ng2-materialize';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ProfileModule,
    SharingModule,
    ProjectModule,
    MaterializeModule.forRoot(),
  ],
  providers: [CommonService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
