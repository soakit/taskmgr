import { NgModule, SkipSelf, Optional } from '@angular/core'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { loadSvgRes } from '../utils/svg.util'

import 'hammerjs'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    SharedModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！')
    }
    loadSvgRes(ir, ds)
  }
}
