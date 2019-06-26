import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>{{ title }}</h2>
    <div mat-dialog-content>
      {{content}}
    </div>
    <div mat-dialog-actions>
      <button
        mat-raised-button
        color="primary"
        type="button"
        (click)="onClick(true)"
      >
        确定
      </button>
      <button mat-button mat-dialog-close color="primary" type="button" (click)="onClick(false)">
        取消
      </button>
    </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = ''
  content: ''
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.title = this.data.title
    this.content = this.data.content
  }

  onClick(res: Boolean) {
    this.dialogRef.close(res)
  }
}
