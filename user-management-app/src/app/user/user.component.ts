import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {

  /**
   *
   */
  constructor() {
    // super();
    
  }

  ngOnInit() {

  }

  getAllUser(){
    // this._userService.getUser().subscribe({
    //   next:(result:any) => {
    //     console.log(result);
        
    //   },
    //   error : (e) =>{
    //     console.log(e);
        
    //   },
    //   complete : () => {

    //   }

    // })
  }

}
