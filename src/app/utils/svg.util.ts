import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

export const loadSvgRes = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const path = 'assets/img/'
  const dayPath = 'assets/img/days/'
  ir.addSvgIcon(
    'day',
    ds.bypassSecurityTrustResourceUrl(`${path}day.svg`)
  );
  ir.addSvgIcon(
    'month',
    ds.bypassSecurityTrustResourceUrl(`${path}month.svg`)
  )
  ir.addSvgIcon(
    'week',
    ds.bypassSecurityTrustResourceUrl(`${path}week.svg`)
  )
  ir.addSvgIcon(
    'project',
    ds.bypassSecurityTrustResourceUrl(`${path}project.svg`)
  )
  ir.addSvgIcon(
    'projects',
    ds.bypassSecurityTrustResourceUrl(`${path}projects.svg`)
  )
  const days = Array.apply(null, new Array(31)).map((elem, index) => index + 1)
  days.forEach(d => {
    ir.addSvgIcon(
      `day${d}`,
      ds.bypassSecurityTrustResourceUrl(`${dayPath}day${d}.svg`)
    );
  });
}
