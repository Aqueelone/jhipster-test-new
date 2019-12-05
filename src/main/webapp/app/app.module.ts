import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterTestNewSharedModule } from 'app/shared/shared.module';
import { JhipsterTestNewCoreModule } from 'app/core/core.module';
import { JhipsterTestNewAppRoutingModule } from './app-routing.module';
import { JhipsterTestNewHomeModule } from './home/home.module';
import { JhipsterTestNewEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterTestNewSharedModule,
    JhipsterTestNewCoreModule,
    JhipsterTestNewHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterTestNewEntityModule,
    JhipsterTestNewAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhipsterTestNewAppModule {}
