import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss'],
})
export class WorldMapComponent implements OnInit {
  private countriesData: any;      // holding the countries Data to Draw on the world map
  constructor(private http: HttpClient) {
    let self = this;
    let urlPrefix = "https://covid19-api.web.app/api/cases?fbclid=IwAR2YKeRlnnNxY5zWACnZsp3j-YPnLSxBI98GX2cRk5nT0S6LchG7j5o-qz4";
    this.http.get(urlPrefix).subscribe((data) => {
      self.countriesData = data["results"];
    });

  }


  ngOnInit() {}

}
