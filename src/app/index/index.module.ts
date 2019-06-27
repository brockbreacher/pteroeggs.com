import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EggCardComponent } from '../egg-card/egg-card.component';

@NgModule({
  declarations: [IndexComponent, EggCardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: '', component: IndexComponent }])
  ]
})
export class IndexModule { }
