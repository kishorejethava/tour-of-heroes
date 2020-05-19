import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { of, Observable } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  private heroesUrl = "api/heroes"; // URL to web api
  httpOption = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => {}),
      catchError(this.handleError("getHeros", []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => {}),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOption).pipe(
      tap((_) => {}),
      catchError(this.handleError<any>("updateHero"))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, this.httpOption).pipe(
      tap((hero: Hero) => {}),
      catchError(this.handleError<Hero>("addHero"))
    );
  }

  /** DELETE : delete the hero from server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === "number" ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOption).pipe(
      tap((_) => {}),
      catchError(this.handleError<Hero>("deleteHero"))
    );
  }

  searchHeros(term: string): Observable<Hero[]> {
    if (!term.trim()) return of([]);

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) => {}),
      catchError(this.handleError<Hero[]>("searchHeros", []))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
