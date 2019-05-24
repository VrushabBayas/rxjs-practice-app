import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export enum RXJsLoggingLevel {
  TRACE,
  DEBUG,
  INFO,
  ERROR
}
let rxjsLoggingLevel = RXJsLoggingLevel.INFO;

export function setRxjsLoggingLevel(level: RXJsLoggingLevel) {
  rxjsLoggingLevel = level;
}

export const debug = (level: Number, message: string) => (
  source: Observable<any>
) =>
  source.pipe(
    tap(val => {
      if (level >= rxjsLoggingLevel) {
        console.log(message + ": ", val);
      }
    })
  );
