import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material'
import { NewProjectComponent } from '../new-project/new-project.component'
import { InviteComponent } from '../invite/invite.component'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      name: '项目名',
      desc: '项目描述',
      coverImg: 'http://ui.qzone.com/400x400'
    },
    {
      name: '项目名2',
      desc: '项目描述2',
      coverImg: 'http://ui.qzone.com/400x400'
    }
  ]
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openNewProjectDialog() {
    const ref = this.dialog.open(NewProjectComponent, { data: { title: '新增项目' } })
    ref.afterClosed().subscribe(res => {
      console.log(JSON.stringify(res))
    })
  }

  launchInviteDialog() {
    // TODO:dark变成动态
    this.dialog.open(InviteComponent, { data: { dark: false } })
  }

  launchUpdateDialog() {
    this.dialog.open(NewProjectComponent, { data: { title: '编辑项目' } })
  }
}
