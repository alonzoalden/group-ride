import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


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

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    submitForm(): void {
        console.log(this.articleForm.value);
    }

}