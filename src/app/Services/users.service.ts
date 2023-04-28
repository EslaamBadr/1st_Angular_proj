import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClint:HttpClient) { }

  private base_URL="http://localhost:3000/users";
  
  getAllUsers(){
    return this.myClint.get(this.base_URL);
  }

  getUserById(ID:any){
    return this.myClint.get(this.base_URL+"/"+ID)
  }

  addUser(newUser:any){
    return this.myClint.post(this.base_URL, newUser);
  }


  updateUser(updatedUser:any, ID:any){
    return this.myClint.put(this.base_URL+"/"+ID, updatedUser);
  }

  deleteUser(ID:any){
    return this.myClint.delete(this.base_URL+"/"+ID);
  }
}
