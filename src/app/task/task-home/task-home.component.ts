import { NewTaskListComponent } from './../new-task-list/new-task-list.component';
import { MoveTaskComponent } from './../move-task/move-task.component'
import { MatDialog } from '@angular/material'
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { NewTaskComponent } from '../new-task/new-task.component'
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
      order: 1,
      tasks: [
        {
          id: 1,
          desc: '任务1',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-1'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务2',
          priority: 2,
          owner: {
            id: 1,
            name: '张三1',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ]
    },
    {
      id: 2,
      order: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务1',
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务2',
          priority: 2,
          owner: {
            id: 1,
            name: '张三1',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        }
      ]
    }
  ]

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  lanuchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: { title: '新增任务' }
    })
  }

  lanuchMoveTaskDialog() {
    this.dialog.open(MoveTaskComponent, {
      data: { lists: this.lists }
    })
  }

  lanuchDeleteTaskDialog() {
    const ref = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除任务列表', content: '确认删除任务列表吗？' } })
    ref.afterClosed().subscribe(res => {
      console.log(res)
      this.cd.markForCheck()
    })
  }

  launchUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, {
      data: { title: '修改任务', task }
    })
  }

  lanuchEditListDialog() {
    this.dialog.open(NewTaskListComponent, {
      data: { title: '修改列表名称' }
    })
  }

  lanuchNewListDialog() {
    this.dialog.open(NewTaskListComponent, {
      data: { title: '新增列表' }
    })
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item': {
        console.log('handle item')
        break;
      }
      case 'task-list': {
        console.log('handle list')
        const srcList = srcData.data
        const temp = srcList.order
        srcList.order = list.order
        list.order = temp
        break;
      }
      default:
        break;
    }
  }
}
