import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // old type
    // document.addEventListener("click", event => {
    //   console.log(event);
    //   setTimeout(() => {
    //     console.log("Finished execution...");
    //     let counter = 0;
    //     setInterval(() => {
    //       console.log(counter++);
    //     }, 1000);
    //   }, 3000);
    // });
    // Rxjs type
    // const interval$ = rxjs.timer(2000, 1000);
    // let sub = interval$.subscribe(val => {
    //   console.log(val);
    // });
    // const click$ = rxjs.fromEvent(document, "click");
    // click$.subscribe(
    //   event => sub.unsubscribe(),
    //   err => console.log(err),
    //   () => console.log("completed")
    // );
    // Of method used to create any sort of observable
    // concatination  of observables using concat observable method
    // const source1$ = rxjs.of(1, 2, 3);
    // const source2$ = rxjs.of(4, 5, 6);
    // const source3$ = rxjs.of(7, 8, 9);
    // const source4$ = rxjs.of(10, 11, 12);
    // const result$ = rxjs.concat(source1$, source2$, source3$, source4$);
    // result$.subscribe(console.log);
    //merge merge function
    // const interval1$ = rxjs.interval(1000);
    // interval1$.subscribe(val => console.log(val));
    // const interval2$ = interval1$.pipe(operators.map(val => 10 * val));
    // interval2$.subscribe(val => console.log("sdfsdf", val));
    // const mergResult$ = rxjs.merge(interval1$, interval2$);
    // mergResult$.subscribe(val => console.log(val));
    //demo for cancling ongoin api call
    // const http$ = createHttpObservable("/api/courses/");
    // const sub = http$.subscribe(console.log);
    // setTimeout(() => sub.unsubscribe(), 0);
  }
}
