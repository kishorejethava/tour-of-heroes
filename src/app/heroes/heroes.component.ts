import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddHeroDialogComponent } from '../add-hero-dialog/add-hero-dialog.component';

export interface DialogData {
  hero : string;
}

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  hero: string;
  heroes: Hero[];
  
  constructor(private heroService: HeroService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      width: '250px',
      data: {hero: this.hero}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.add(result)
    }); 
  }
}
