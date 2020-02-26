import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public caption: string = '';
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  public onButtonClick(event): any {
    this.buttonClick.emit(event);
  }
}
