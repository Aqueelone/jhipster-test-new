import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterTestNewSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterTestNewSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class JhipsterTestNewHomeModule {}
