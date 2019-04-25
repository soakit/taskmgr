import { NgModule } from '@angular/core'

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material'

@NgModule({
  imports: [MatSidenavModule, MatToolbarModule, MatIconModule],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule {}
