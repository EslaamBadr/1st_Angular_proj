import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
@Component({
  selector: 'app-apdate-user',
  templateUrl: './apdate-user.component.html',
  styleUrls: ['./apdate-user.component.css']
})
export class ApdateUserComponent  {
  ID=0; 
  user:any;
  updatedUser:any;
  emailReg = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";

  constructor(myRoute:ActivatedRoute,public myServic:UsersService, public myRouter:Router) {
    this.ID=myRoute.snapshot.params["id"];
    console.log(this.ID)
    this.myServic.getUserById(this.ID).subscribe({
      next:(data)=>{this.user=data},
      error:()=>{}
    })
}

  update(name:any, age:any, email:any, address:any, phone:any){
    if( name && age > 18 && age < 90 && address && email.match(this.emailReg) && phone ){
    let updatedUser = {name, age, email, address, phone};
    this.myServic.updateUser(updatedUser, this.ID).subscribe({
      next:(data)=>{this.myRouter.navigate([''])}
    });
    alert("Updated Successfully...");

  }else{
    alert("Please Enter a Valid Data! \n Make Sure That: \n -Name field is filled. \n -Age must be between 18 and 90. \n -Valid email. \n -Address field is filled. \n -Phone field is filled.");
  }
  }
}