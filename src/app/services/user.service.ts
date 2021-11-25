import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= environment.url+"user";
  list: User[]= [
    {
      idUser: 1,
      firstName: "Mila",
      lastName: " Kunis",
      birthDate: "30-06-1999",
      accountCategory: "Admin",
      email: "mila@kunis.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
      profession: "Software Engineer"
    },
    {
      idUser: 2,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "10-02-1981",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
      profession: "Software Engineer"
    },
    {
      idUser: 3,
      firstName: "George",
      lastName:  "Clooney",
      birthDate: "10-02-1981",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
      profession: "Software Engineer"
    },
    {
      idUser: 4,
      firstName: "Ryan",
      lastName:  "Gossling",
      birthDate: "05-03-1987",
      accountCategory: "Golden",
      email: "Ryan@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
      profession: "Software Engineer"
    },
    {
      idUser: 4,
      firstName: "Robert",
      lastName:  "Downey",
      birthDate: "05-03-2002",
      accountCategory: "Blocked",
      email: "robert@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
      profession: "Software Engineer"
    }
  ];
  isLoginIn: boolean = false;

  constructor(private http: HttpClient) {
  }

  getListUser() {
    return this.http.get<User[]>(this.url);
  }

  addUser(user : User) {
    return this.http.post(this.url, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url+id);

  }

  updateUser(user: User) {
    return this.http.put(this.url+user.idUser, user);

  }

}
