import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import {DividerModule} from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DividerModule,
    TabViewModule
  ]
})
export class PublicModule { }
