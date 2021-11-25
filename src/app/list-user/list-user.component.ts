import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  list: User[];
  all: User[];
  inputCategory: string;
  category: string;
  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit(): void {


    // this.all = this.userService.list;
    this.userService.getListUser().subscribe(res => this.all = res);
    this.route.paramMap.subscribe(
      res => {
        let category = res.get('category');
        this.list = this.all.filter(user => {
          return user.accountCategory === category;
        })
      });

  }

  delete(user: User){
    let i = this.list.indexOf(user);
    //this.list.splice(i,1);
    this.userService.deleteUser(user.idUser).subscribe(
      ()=>this.list.splice(i,1),
      ()=>console.log("delete error"))

  }
  getColor(user: User){
    if(user.accountCategory=="Blocked Account")
      return 'red';
    else return '';
  }
}
