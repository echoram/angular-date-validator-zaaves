import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DateValidator } from "../shared/date.validator";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      date: ['', [Validators.required]],
      apellido: ['']
    });
  }

  ngOnInit() {}

  submit() {
    //console.log(this.heroForm.valid);
  }
}
