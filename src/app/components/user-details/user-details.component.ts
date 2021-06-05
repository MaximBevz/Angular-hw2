import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import User from "../../models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  constructor(private router: Router, private activatedRout: ActivatedRoute) {
    this.activatedRout.params.subscribe(params => {
      this.user = this.router.getCurrentNavigation()?.extras.state as User;
    })
  }

  ngOnInit(): void {
  }

}
