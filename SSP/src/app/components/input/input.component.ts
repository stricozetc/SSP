import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() public inputChange: EventEmitter<any> = new EventEmitter();
  @Output() public inputFocus: EventEmitter<boolean> = new EventEmitter();
  @Output() public inputBlur: EventEmitter<boolean> = new EventEmitter();
  public movieFilm = new FormControl();

  public ngOnInit(): void {
    this.movieFilm.valueChanges.subscribe(
      (value) => this.inputChange.emit(value)
    );
  }

  public onInputFocus() {
    this.inputFocus.emit();
  }

}
