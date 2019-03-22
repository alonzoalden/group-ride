import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Listing } from '../core/models/index';

@Injectable()
export class ValidationService {
    public formInputs = [];

    public validate(): Boolean {
        let valid = true;
        this.formInputs.forEach(element => {
            if (element.control.invalid) {
                element.control.markAsTouched();
                element.control.markAsDirty();
                valid = false;
            }
        });
        this.formInputs = [];
        return valid;
    }
}