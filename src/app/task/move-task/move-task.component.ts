import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-move-task',
  templateUrl: './move-task.component.html',
  styleUrls: ['./move-task.component.scss']
})
export class MoveTaskComponent implements OnInit {

  list: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<MoveTaskComponent>
  ) { }

  ngOnInit() {
    this.list = this.data.lists
  }

}
