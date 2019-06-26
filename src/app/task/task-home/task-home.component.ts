import { MoveTaskComponent } from './../move-task/move-task.component'
import { MatDialog } from '@angular/material'
import { Component, OnInit } from '@angular/core'
import { NewTaskComponent } from '../new-task/new-task.component'
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
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

  constructor(private dialog: MatDialog) {}

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
    })
  }

  launchUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, {
      data: { title: '修改任务', task }
    })
  }
}
