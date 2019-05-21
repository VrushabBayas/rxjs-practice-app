import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { interval, Observable, of, timer, noop } from "rxjs";
import {
  catchError,
  delayWhen,
  map,
  retryWhen,
  shareReplay,
  filter,
  tap
} from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  constructor() {}

  ngOnInit() {
    const http$ = createHttpObservable("/api/courses");

    // const courses$ = http$.pipe(map(res => Object.values(res["payload"])));

    this.beginnerCourses$ = http$.pipe(
      map(courses => courses)
      filter(courses => courses.category === "BEGINER")
    );

    // courses$.subscribe(
    //   val => {
    //     console.log(val);
    //   },
    //   noop,
    //   () => {
    //     console.log("Completed");
    //   }
    // );
  }
}
