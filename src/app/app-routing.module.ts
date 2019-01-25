import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found-component/page-not-found.component';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: './hero/hero.module#HeroModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { enableTracing: true })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
