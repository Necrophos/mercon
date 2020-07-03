import { ShareService } from './../../services/share.service';
import { Router,Event, NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { HostListener, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() title: any;
  @Input() tradeNumber: any;

  constructor(
    @Inject(PLATFORM_ID) public platformId: string,
    private shareService: ShareService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  public scrolled: boolean = false;
  public awake: boolean = false;
  public display: boolean = false;
  public stretching: boolean = false;
  public fuelsLogo = "assets/icons/fuels-logo.png";
  public fuelsLogoW = "assets/icons/fuels-logo-white.png";
  companyName: any;
  userName: any;
  isPurchase = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 30;
      this.awake = window.scrollY > 100;
      if (window.scrollY > 30) {
        this.display = true;
        this.fuelsLogo = "/assets/icons/fuels-logo-white.png";
      } else {
        this.fuelsLogo = "/assets/icons/fuels-logo.png";
        this.display = false;
      }
    }
  }


  ngOnInit() {
    this.companyName = this.shareService.getListCompany()[0].companyCd;
    this.userName = this.shareService.getUser().userName;
    this.shareService.clientChosen.subscribe((res) => {
      if (res) {
        this.companyName = res.companyCd
      }
    });
    this.shareService.tradeNumber.subscribe((res) => {
      this.tradeNumber = res;
    })
  }
  
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  showMobileNav() {
    this.stretching = !this.stretching;
  }

  hiddenMobileNav() {
    this.stretching = !this.stretching;
  }
}