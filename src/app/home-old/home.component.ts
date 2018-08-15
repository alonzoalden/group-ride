import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    articleForm = this.fb.group({
        title: '',
        description: ''
    });

    constructor(
        private fb: FormBuilder,
        private user: UserService
    ) { }

    ngOnInit() {
    }

    submitForm(): void {
        console.log(this.articleForm.value);
    }

}