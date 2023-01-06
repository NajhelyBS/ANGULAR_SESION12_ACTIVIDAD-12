import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
//creating our form
public formValidation!: FormGroup;

constructor(private formBuilder:FormBuilder){

}

  //Dando Validaciones
  ngOnInit(): void {


    this.formValidation = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(12)]],

      email:['', [Validators.required, Validators.email]],
      
      message:['', [Validators.required, Validators.maxLength(500),]],})

  }

  send():any{
    alert("Formulario completado");
  }


}
