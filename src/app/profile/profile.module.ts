import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'ng2-materialize';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileEducationComponent } from './profile-education/profile-education.component';
import { ProfileTechninalSkillComponent } from './profile-techninal-skill/profile-techninal-skill.component';
import { ProfileExperienceComponent } from './profile-experience/profile-experience.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    MaterializeModule
  ],
  declarations: [ProfileComponent, ProfileEducationComponent, ProfileTechninalSkillComponent, ProfileExperienceComponent]
})
export class ProfileModule { }
