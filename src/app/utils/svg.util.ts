import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

export const loadSvgRes = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon(
    'thumbs-up',
    ds.bypassSecurityTrustResourceUrl('assets/img/thumbup-icon.svg')
  )
}
