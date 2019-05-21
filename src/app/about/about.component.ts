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
    //custom  observable
  }
}
