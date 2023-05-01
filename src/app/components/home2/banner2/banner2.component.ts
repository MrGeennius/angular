import { Component, OnInit, AfterViewInit } from '@angular/core';
import {trigger, state, style, animate, transition, stagger, query } from "@angular/animations"
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class Banner2Component implements OnInit {

  

  constructor(public analyticsService: AnalyticsService,private crudService: CrudService, private router: Router) {}
  personas: any;
  bannerDesc: any;
  ngOnInit(): void {
    this.getItems();
    this.getBannerDesc();
  }
  getItems(): void {
    this.crudService.getItems().subscribe((data) => {
      this.personas = data;
    });
  }

  editItem(): void {
    this.router.navigate(['/edit/1']);
  }

  
  getBannerDesc() {
    this.crudService.getBannerDesc().subscribe(bannerDesc => {
      this.bannerDesc = bannerDesc;
    });
  }
  goToEditBanner() {
    this.router.navigate(['/edit/banner']);
  }

}
