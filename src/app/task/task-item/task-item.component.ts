import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() item
  @Output() taskClick =  new EventEmitter<void>()
  avatar: string
  constructor() {}

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned'
  }

  onItemClick() {
    this.taskClick.emit()
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation()
  }
}
