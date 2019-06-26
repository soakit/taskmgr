import { NgModule } from '@angular/core'
import { SharedModule } from './../shared/shared.module'
import { TaskRoutingModule } from './task-routing.module'
import { TaskHomeComponent } from './task-home/task-home.component'
import { TaskListComponent } from './task-list/task-list.component'
import { TaskHeaderComponent } from './task-header/task-header.component'
import { TaskItemComponent } from './task-item/task-item.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { MoveTaskComponent } from './move-task/move-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component'

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskHeaderComponent,
    TaskItemComponent,
    NewTaskComponent,
    MoveTaskComponent,
    NewTaskListComponent
  ],
  imports: [SharedModule, TaskRoutingModule],
  entryComponents: [NewTaskComponent, MoveTaskComponent, NewTaskListComponent]
})
export class TaskModule {}
