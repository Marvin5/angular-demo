import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './hero/service/in-memory-data.service';
import { NZ_I18N, NZ_ICONS, zh_CN } from 'ng-zorro-antd';
import { PageNotFoundComponent } from './component/page-not-found-component/page-not-found.component';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule {}
