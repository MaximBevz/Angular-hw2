import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "./components/posts/posts.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children:
      [
        {path: ':id', component: UserDetailsComponent}
      ]},
  {path: 'posts', component: PostsComponent, children:
      [
        {path: ':id', component: PostDetailsComponent}
      ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
