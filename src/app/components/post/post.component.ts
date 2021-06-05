import {Component, Input, OnInit} from '@angular/core';
import Post from "../../models/post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  goToDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post});
  }

}
