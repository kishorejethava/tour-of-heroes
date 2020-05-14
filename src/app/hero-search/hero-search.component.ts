import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { distinctUntilChanged, switchMap, debounceTime } from "rxjs/operators";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"],
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeros(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
