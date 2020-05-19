import {
  Component,
  HostListener,
  OnInit,
  ChangeDetectorRef,
} from "@angular/core";
import {
  ActivatedRoute,
  Router,
  Routes,
  RouterLinkActive,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isViewInitialized = false;
  navLinks = [];
  title = "Tour of Heroes";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.navLinks =
      this.route.routeConfig && this.route.routeConfig.children
        ? this.buildNavItems(this.route.routeConfig.children)
        : [];
  }

  buildNavItems(routes: Routes) {
    return routes
      .filter((route) => route.data)
      .map(({ path = "", data }) => ({
        path: path,
        label: data.label,
        icon: data.icon,
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }
}
