import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  template: `<form #registerForm="ngForm" (ngSubmit)="register()" autocomplete="off">
  <h2 class="text-center text-primary">Sign up</h2>
  <hr>
  <div class="form-group">
      <input type="text" class="form-control" name="username" 
      [(ngModel)]="model.username" placeholder="Username">
  </div>

  <div class="form-group">
      <input type="password" class="form-control" name="password" 
      [(ngModel)]="model.password" placeholder="Password">
  </div>

  <div class="form-group text-center">
      <button class="btn btn-success mr-2" type="submit">Register</button>
      <button class="btn btn-danger mr-2" type="button" (click)="cancel()">Cancel</button>
  </div>
</form>`,
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  @Output() cancelRegister = new EventEmitter();
  model : any = {};

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel()
    },error => {
      console.log(error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
