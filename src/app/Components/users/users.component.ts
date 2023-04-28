import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  ID:any;
  users:any;
  constructor(public myRoute:ActivatedRoute,public myServic: UsersService, public myRouter:Router) {

    this.ID=myRoute.snapshot.params["id"];
    console.log(this.ID)

    myServic.getAllUsers().subscribe(
      {
        next: (data)=>{this.users=data},

        error: (err)=>{console.log(err)},

        complete: ()=>{console.log("success")}
      }
      )
  }

  delete(ID:any){
    let x = confirm("Do You Want To Delete This User");
    if(x){
    console.log("leeeeeh"+ID);
    this.myServic.deleteUser(ID).subscribe({
      next:(data)=>{this.myRouter.navigate([''])},
      error:(err)=>{}
    })
  }
  }
}
