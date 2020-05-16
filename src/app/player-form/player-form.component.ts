import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css']
})

export class PlayerFormComponent implements OnInit {

    playerForm: FormGroup;

    constructor(private fb: FormBuilder) { 
        this.playerForm = fb.group({
            firstName: [''],
            lastName: [''],
            weight: ['']
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.playerForm.value);
    }
}