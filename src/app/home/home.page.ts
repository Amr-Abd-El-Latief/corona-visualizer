
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
 private currentPage = 'charts';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
  }
  changePage(pageName){
    this.currentPage = pageName;
  }

}