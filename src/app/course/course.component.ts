import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay,
  throttleTime,
  throttle
} from "rxjs/operators";
import { merge, fromEvent, Observable, concat, interval } from "rxjs";
import { Lesson } from "../model/lesson";
import { createHttpObservable } from "../common/util";

import { RXJsLoggingLevel, debug } from "../common/debug";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit, AfterViewInit {
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  courseId: string;
  @ViewChild("searchInput") input: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params["id"];

    this.course$ = createHttpObservable(`/api/courses/${this.courseId}`).pipe(
      debug(RXJsLoggingLevel.INFO, "Course Value")
    );
  }

  ngAfterViewInit() {
    // const searchLesson$ = fromEvent(this.input.nativeElement, "keyup").pipe(
    //   map(event => event.target.value),
    //   startWith(""), //used to set initial search value in this perticular case
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   switchMap(search => this.loadLessons(search)) //to cancle to multiple requests of the dame type caused by some reasons
    //   // concatMap(search => this.loadLessons(search)) triggers the events in sequence
    // );
    // const initialLessons$ = this.loadLessons();
    // this.lessons$ = concat(initialLessons$, searchLesson$);
    // fromEvent(this.input.nativeElement, "keyup")
    //   .pipe(
    //     map(event => event.target.value),
    //     startWith(""), //used to set initial search value in this perticular case
    //     // debounceTime(400),
    //     // throttle(() => interval(500))
    //     throttleTime(500)
    //   )
    //   .subscribe(console.log);

    //custom operator use
    this.lessons$ = fromEvent(this.input.nativeElement, "keyup").pipe(
      map(event => event.target.value),
      startWith(""), //used to set initial search value in this perticular case
      debug(RXJsLoggingLevel.INFO, "search"),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(search => this.loadLessons(search)), //to cancle to multiple requests of the dame type caused by some reasons
      debug(RXJsLoggingLevel.INFO, "search Value")
    );
  }

  loadLessons(search = ""): Observable<Lesson[]> {
    return createHttpObservable(
      `/api/lessons?courseId=${this.courseId}&pageSize=100&filter=${search}`
    );
  }
}
