import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-height-input',
  templateUrl: './player-height-input.component.html',
  styleUrls: ['./player-height-input.component.css']
})
export class PlayerHeightInputComponent implements OnInit {

  parts: FormGroup;

  constructor(fb: FormBuilder) {
    this.parts = fb.group({
    'feet': '',
    'inches': ''
    });
  }

  ngOnInit(): void {
  }

}
