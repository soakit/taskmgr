import { Component } from '@angular/core'
import { OverlayContainer } from '@angular/cdk/overlay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false

  constructor(private oc: OverlayContainer) {}

  switchTheme(dark) {
    this.darkTheme = dark
    this.oc.getContainerElement().className = dark ? 'myapp-dark-theme' : ''
  }
}
