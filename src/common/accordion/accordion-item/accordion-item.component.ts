import {Component, Input, Output, HostBinding, EventEmitter, OnInit} from '@angular/core';
import {
  animation,
  trigger,
  state,
  transition,
  animate,
  style,
  group
} from '@angular/animations';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [
    trigger('accordionItemContentAnimation', [
      state('isOpen', style({height: '*'})),
      state('isClose', style({height: 0})),
      transition('isOpen <=> isClose', group([animate('500ms')])),
    ])
  ]
})
export class AccordionItemComponent implements OnInit {
  public state: any = 'isClose';
  // tslint:disable-next-line:variable-name
  private _isOpen: any = false;

  @Input('isOpen')
  set isOpen(value: boolean) {
    this._isOpen = value;
    this.state = this._isOpen ? 'isOpen' : 'isClose';
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  @Input() title: string;
  @Output() onToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }


  ngOnInit() {
  }


  public onClickHeader() {
    this.isOpen = this.isOpen ? false : true;
    this.onToggle.emit(this.isOpen);
  }
}
