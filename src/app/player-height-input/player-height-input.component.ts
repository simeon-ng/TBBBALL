import { Component, OnInit, Input, HostBinding, Optional, Self, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

// class playerHeight
// Represents a players height.
class playerHeight {
  constructor(public feet: number, public inches: number) {}
}

@Component({
  selector: 'app-player-height-input',
  templateUrl: './player-height-input.component.html',
  styleUrls: ['./player-height-input.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: PlayerHeightInputComponent}],
})

// class PlayerHeightInputComponent
// Custom 'MatFormFieldControl' for player height input.
export class PlayerHeightInputComponent implements OnInit, MatFormFieldControl<playerHeight> {

  // Data members
  heightInput: FormGroup;

  stateChanges = new Subject<void>();
  static nextId = 0;
  private _placeholder : string;
  focused = false;
  private _required = true;
  private _disabled = false;
  errorState = false;
  controlType = 'app-player-height-input';

  // Getters and Setters
  @Input()
  public get value() : playerHeight | null {
    let input = this.heightInput.value;
    if (input.feet.length == 1 && input.inches.length <= 2) {
      return new playerHeight(input.feet, input.inches);
    }
    return null;
  }
  public set value(height: playerHeight | null) {
    height = height || new playerHeight(0, 0);
    this.heightInput.setValue({feet: height.feet, inches: height.inches});
    this.stateChanges.next();
  }

  @HostBinding() id = 'app-player-height-input-${PlayerHeightInputComponent++}';

  @Input()
  public get placeholder() {
    return this._placeholder;
  }
  public set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  
  public get empty() {
    let input = this.heightInput.value;
    return !input.feet && !input.inches;
  }

  @HostBinding('class.floating')
  public get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @Input()
  get disabled() : boolean {
    return this._disabled;
  }
  set disabled(value : boolean) {
    this._disabled = coerceBooleanProperty(value);
    // Question mark operator is Ternary operator
    // If (this._disabled), then value if true is this.heightInput.disable()
    this._disabled ? this.heightInput.disable() : this.heightInput.enable();
    this.stateChanges.next();
  }

  @HostBinding('attr.aria-describedby') describedBy = '';

  // constructor
  constructor(fb: FormBuilder,
              @Optional() @Self() public ngControl: NgControl,
              private fm: FocusMonitor,
              private elRef: ElementRef<HTMLElement>,) {
    this.heightInput = fb.group({
    'feet': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
    'inches': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]]
    });

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  // Member functions (Methods)
  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
}