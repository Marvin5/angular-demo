import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroBaseComponent } from './component/hero-base/hero-base.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { MessageComponent } from './component/message/message.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroSearchComponent } from './component/hero-search/hero-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroBaseComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [CommonModule, SharedModule, HeroRoutingModule]
})
export class HeroModule {}
