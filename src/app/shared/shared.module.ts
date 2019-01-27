import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Third party module
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // Third party module
    NgZorroAntdModule
  ]
})
export class SharedModule {}
