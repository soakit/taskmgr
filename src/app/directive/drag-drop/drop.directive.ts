import { DragDropService, DragData } from './../drag-drop.service';
import { Directive, Input, ElementRef, Renderer2, HostListener, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appDrop][dropTags][dragEnterClass]'
})
export class DropDirective {

  @Output() dropped: EventEmitter<DragData> = new EventEmitter();
  @Input() dropTags: string[] = [];
  @Input() dragEnterClass = '';
  private drag$
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) {
    this.drag$ = this.service.getDragData()
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (!dragData) {
          return
        }
        console.log('dragenter:', dragData)
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (!dragData) {
          return
        }
        console.log('dragover:', dragData)
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (!dragData) {
          return
        }
        console.log('dragleave:', dragData)
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (!dragData) {
          return
        }
        console.log('drop:', dragData)
        debugger
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }
}
