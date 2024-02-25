import { Observable, combineLatest, map } from "rxjs";

export function combineLoadings(...args: Observable<boolean>[]): Observable<boolean> {
  return combineLatest(args).pipe(map(item => item.some(value => value)));
}
