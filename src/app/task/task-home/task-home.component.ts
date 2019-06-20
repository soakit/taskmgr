import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [{
    id: 1,
    name: '待办',
    tasks: [{
      id: 1,
      desc: '任务1',
      completed: true,
      priority: 1,
      owner: {
        id: 1,
        name: '张三',
        avatar: 'avatars:svg-1'
      },
      dueDate: new Date(),
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
      reminder: new Date(),
    }]
  }, {
    id: 2,
    name: '进行中',
    tasks: [{
      id: 1,
      desc: '任务1',
      priority: 3,
      owner: {
        id: 1,
        name: '张三',
        avatar: 'avatars:svg-11'
      },
      dueDate: new Date(),
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
    }]
  }]

  constructor() { }

  ngOnInit() {
  }

}
