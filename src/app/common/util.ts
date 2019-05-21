import * as rxjs from "rxjs";

export function createHttpObservable(url: string) {
  return rxjs.Observable.create(observer => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body.payload);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      });
  });
}
