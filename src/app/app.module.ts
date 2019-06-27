import { CoreModule } from './core/core.module'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'

import { LoginModule } from './login/login.module'
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    LoginModule,
    ProjectModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
