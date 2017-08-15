import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

/**
 * Third-Party
 */
import { MaterializeModule } from 'ng2-materialize';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SideNavComponent],
  exports: [HeaderComponent]
})
export class CoreModule { }
