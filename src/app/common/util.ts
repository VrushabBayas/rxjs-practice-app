import * as rxjs from "rxjs";

export function createHttpObservable(url: string) {
  return rxjs.Observable.create(observer => {
    //how to abort ongoing api call
    const apiController = new AbortController();
    const signal = apiController.signal;
    fetch(url, { signal })
      .then(response => {
        return response.json();
      })
      .then(body => {
        console.log("body: ", body);
        observer.next(body.payload);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      });

    return () => apiController.abort();
  });
}
