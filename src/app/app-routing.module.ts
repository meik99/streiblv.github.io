import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {DrawingComponent} from "./drawings/drawing.component";
import {AnimationComponent} from "./animations/animation.component";
import {PhotographyComponent} from "./photography/photography.component";
import {HomeComponent} from "./home/home.component";
import {MoreComponent} from "./more/more.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "drawing",
    component: DrawingComponent
  },
  {
    path: "animation",
    component: AnimationComponent
  },
  {
    path: "photography",
    component: PhotographyComponent
  },
  {
    path: "more",
    component: MoreComponent
  },
  {
    path: "about-me",
    component: AboutMeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
