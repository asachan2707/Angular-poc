import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

import { UserModule } from './user/user.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductShellComponent } from './products/product-shell/product-shell.component';
import { ProductGridComponent } from './products/product-grid/product-grid.component';
import { ProductChartComponent } from './products/product-chart/product-chart.component';
import { SharedModule } from './shared/shared.module';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductTableComponent } from './products/product-table/product-table.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    ROUTING,
    UserModule,
    SharedModule,
    VirtualScrollerModule
  ],
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductGridComponent,
    ProductChartComponent,
    PageNotFoundComponent,
    ProductTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
