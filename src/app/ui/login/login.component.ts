import { Component, OnInit } from "@angular/core";
import { User } from "../data-models/user";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  constructor() {}

  ngOnInit() {}
}
