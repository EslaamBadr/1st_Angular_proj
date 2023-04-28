import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

emailReg = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";

  constructor(public myServic:UsersService, public myRouter:Router){

  }

  add(name:any, age:any, email:any, address:any, phone:any){
    if( name && age > 18 && age < 90 && address && email.match(this.emailReg) && phone ){
    let newUser = {name, age, email, address, phone};
    this.myServic.addUser(newUser).subscribe({
      next:(data)=>{this.myRouter.navigate([''])}
    });
    alert("Added Successfully...");

  }else{
    alert("Please Enter a Valid Data! \n Make Sure That: \n -Name field is filled. \n -Age must be between 18 and 90. \n -Valid email. \n -Address field is filled. \n -Phone field is filled.");
  }
  }
}
