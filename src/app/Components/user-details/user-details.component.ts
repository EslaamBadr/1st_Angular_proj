import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  ID=0; 
  user:any;
  constructor(myRoute:ActivatedRoute,public myServic:UsersService){
    this.ID=myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.myServic.getUserById(this.ID).subscribe(
      {
        next: (data)=>{this.user=data;},
        error: (err)=>{console.log(err)},
        complete: ()=>{console.log("Success")}
      }
    )
  }
}
